import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CdkDragDrop, CdkDragMove, CdkDragEnd, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { ImageOrientation, SiteImage } from '../../services/image.service';

interface EditableImage extends SiteImage {
  row: number;
  col: number;
  colSpan: number;
  rowSpan: number;
}

interface DragData {
  image: SiteImage | EditableImage;
  origin: string;
  index: number;
}

const SPAN_MAP: Record<ImageOrientation, { colSpan: number; rowSpan: number }> = {
  portrait: { colSpan: 1, rowSpan: 2 },
  square: { colSpan: 1, rowSpan: 1 },
  landscape: { colSpan: 2, rowSpan: 1 },
  panorama: { colSpan: 3, rowSpan: 1 },
  ultrawide: { colSpan: 5, rowSpan: 1 }
};

@Component({
  selector: 'app-grid-sorter',
  standalone: false,
  templateUrl: './grid-sorter.html',
  styleUrl: './grid-sorter.css'
})
export class GridSorter implements OnInit {
  @Input() images: SiteImage[] = [];
  @ViewChild('gridBoardRef') gridBoardRef!: ElementRef;

  inventoryImages: SiteImage[] = [];
  gridImages: EditableImage[] = [];
  
  bgCells = new Array(100); 

  preview: { row: number, col: number, rowSpan: number, colSpan: number } | null = null;
  previewValid: boolean = false;

  ngOnInit(): void {
    this.inventoryImages = [...this.images];
  }

  onDragMoved(event: CdkDragMove<DragData>): void {
    const board = this.gridBoardRef.nativeElement.getBoundingClientRect();
    const pointer = event.pointerPosition;

    if (
      pointer.x >= board.left && 
      pointer.x <= board.right && 
      pointer.y >= board.top && 
      pointer.y <= board.bottom
    ) {
      const cellWidth = (board.width - 20) / 5;
      const cellHeight = 150;
      const gap = 5;

      const col = Math.floor((pointer.x - board.left) / (cellWidth + gap)) + 1;
      const row = Math.floor((pointer.y - board.top) / (cellHeight + gap)) + 1;

      const span = SPAN_MAP[event.source.data.image.orientation];

      if (col >= 1 && col + span.colSpan - 1 <= 5 && row >= 1) {
        this.preview = { row, col, rowSpan: span.rowSpan, colSpan: span.colSpan };
        this.previewValid = !this.checkCollision(row, col, span.rowSpan, span.colSpan, event.source.data.image.id);
      } else {
        this.preview = null;
      }
    } else {
      this.preview = null;
    }
  }
  trackById(index: number, item: any): string {
    return item.id;
  }

onDropIntoGrid(event: CdkDragDrop<any>): void {
    if (!this.preview || !this.previewValid) {
      this.preview = null;
      this.previewValid = false;
      return;
    }

    const draggedData = event.item.data;

    if (event.previousContainer !== event.container) {
      const targetIndex = event.container.data.length;
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        targetIndex
      );

      const droppedItem = this.gridImages[targetIndex];
      droppedItem.row = this.preview.row;
      droppedItem.col = this.preview.col;
      droppedItem.rowSpan = this.preview.rowSpan;
      droppedItem.colSpan = this.preview.colSpan;
    } else {
      const movedItem = this.gridImages.find(img => img.id === draggedData.image.id);
      if (movedItem) {
        movedItem.row = this.preview.row;
        movedItem.col = this.preview.col;
      }
    }

    this.inventoryImages = [...this.inventoryImages];
    this.gridImages = [...this.gridImages];
    this.preview = null;
    this.previewValid = false;
  }

  onDropIntoInventory(event: CdkDragDrop<any>): void {
    if (event.previousContainer !== event.container) {
      const draggedData = event.item.data;
      const exactIndex = this.gridImages.findIndex(img => img.id === draggedData.image.id);
      
      if (exactIndex !== -1) {
        transferArrayItem(
          this.gridImages,
          this.inventoryImages,
          exactIndex,
          event.currentIndex
        );
        
        const returnedItem = this.inventoryImages[event.currentIndex] as any;
        delete returnedItem.row;
        delete returnedItem.col;
        delete returnedItem.rowSpan;
        delete returnedItem.colSpan;
      }
    } else {
      moveItemInArray(this.inventoryImages, event.previousIndex, event.currentIndex);
    }
    
    this.inventoryImages = [...this.inventoryImages];
    this.gridImages = [...this.gridImages];
    this.preview = null;
    this.previewValid = false;
  }

  onDragEnded(event: CdkDragEnd): void {
    setTimeout(() => {
      this.preview = null;
      this.previewValid = false;
    }, 10);
  }
  private checkCollision(row: number, col: number, rowSpan: number, colSpan: number, ignoreId: string): boolean {
    for (const img of this.gridImages) {
      if (img.id === ignoreId) continue;

      const overlapX = (col < img.col + img.colSpan) && (col + colSpan > img.col);
      const overlapY = (row < img.row + img.rowSpan) && (row + rowSpan > img.row);

      if (overlapX && overlapY) return true;
    }
    return false;
  }

  loadSavedLayout(): void {
    const savedLayout = [
      { id: 'morocco4', row: 1, col: 1 },
      { id: 'morocco6', row: 1, col: 3 },
      { id: 'morocco14', row: 3, col: 1 }
    ];

    savedLayout.forEach(savedItem => {
      const invIndex = this.inventoryImages.findIndex(img => img.id === savedItem.id);
      if (invIndex !== -1) {
        const itemToMove = this.inventoryImages[invIndex];
        const span = SPAN_MAP[itemToMove.orientation];

        this.inventoryImages.splice(invIndex, 1);

        const gridEditableItem: EditableImage = {
          ...itemToMove,
          row: savedItem.row,
          col: savedItem.col,
          rowSpan: span.rowSpan,
          colSpan: span.colSpan
        };

        this.gridImages.push(gridEditableItem);
      }
    });

    this.inventoryImages = [...this.inventoryImages];
    this.gridImages = [...this.gridImages];
    alert('Layout loaded onto the grid!');
  }
  
  exportCleanArray(): void {
    if (this.inventoryImages.length > 0) {
      console.warn(`Warning: ${this.inventoryImages.length} images are still left in the inventory box.`);
    }

    const sorted = [...this.gridImages].sort((a, b) => {
      if (a.row !== b.row) return a.row - b.row;
      return a.col - b.col;
    });

    const cleanArray: SiteImage[] = sorted.map(({ row, col, colSpan, rowSpan, ...image }) => image);
    const formattedJson = JSON.stringify(cleanArray, null, 2)
      .replace(/"([^"]+)":/g, '$1:')
      .replace(/"/g, "'");

    console.log('--- EXPORTED ARRAY ---');
    console.log(formattedJson);

    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(formattedJson).then(() => {
        alert('Exported to Clipboard!');
      }).catch(err => {
        console.warn('Clipboard API blocked, attempting fallback:', err);
        this.fallbackCopyTextToClipboard(formattedJson);
      });
    } else {
      this.fallbackCopyTextToClipboard(formattedJson);
    }
  }

  private fallbackCopyTextToClipboard(text: string): void {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.opacity = '0';
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        alert('Exported to Clipboard (Fallback method)!');
      } else {
        alert('Copy failed. Check your browser console (F12) for the raw JSON text.');
      }
    } catch (err) {
      console.error('Fallback execution error:', err);
      alert('Copy failed. Check your browser console (F12) for the raw JSON text.');
    }

    document.body.removeChild(textArea);
  }
}