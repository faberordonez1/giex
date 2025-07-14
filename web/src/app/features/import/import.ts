import { Component, inject, OnDestroy, signal } from '@angular/core';
import { Documento } from '@core/service/documento/documento';
import * as ExcelJS from 'exceljs';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-import',
  imports: [],
  templateUrl: './import.html',
  styleUrl: './import.scss'
})
export class Import  implements  OnDestroy{

   archivo:File | null = null;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   dataFile=signal<any[]>([]);
   private unsubscribe$ = new Subject<void>(); // Signal for cleanup
   private documentoSvc=inject(Documento)

  soltar(e: DragEvent) {
    e?.preventDefault();
    e?.stopPropagation();
    const files = e?.dataTransfer?.files;
    console.log(files,'files');
    
    if(files){
      this.archivo=files[0]
    }
  }

  prevent(e:DragEvent){
    e?.preventDefault();
    e?.stopPropagation();
  }

  handleFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.archivo=file;

      this.readExcelWithExcelJS(file);

      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const content = e.target?.result as string;
        //console.log('File content:', content);
        // Process the file content as needed
      };
      reader.readAsText(file);
    }
  }

  async readExcelWithExcelJS(file: File) {
    const workbook = new ExcelJS.Workbook();
    const arrayBuffer = await file.arrayBuffer();
    
    await workbook.xlsx.load(arrayBuffer);
    
    const worksheet = workbook.getWorksheet(1);//Obtiene la primera hoja de cálculo
    if(!worksheet) return;

    const dataFile:unknown[] = []; // Limpiar datos previos

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    worksheet.eachRow((row, rowNumber) =>dataFile.push(row.values))

    this.dataFile.set(dataFile);
  }

  enviar(){
    if (!this.archivo) {
      console.error('No file selected');
      return;
    }

    this.documentoSvc.enviar(this.archivo)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
      next: (response) => {
        console.log('Import successful:', response);
      },
      error: (error) => {
        console.error('Import failed:', error);
      }
    });

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
