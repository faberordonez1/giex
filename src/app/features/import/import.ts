import { Component, signal } from '@angular/core';
import * as ExcelJS from 'exceljs';

@Component({
  selector: 'app-import',
  imports: [],
  templateUrl: './import.html',
  styleUrl: './import.scss'
})
export class Import {

   archivo:any
   dataFile=signal<any[]>([]);

  soltar(e: DragEvent) {
    e?.preventDefault();
    e?.stopPropagation();
    let files = e?.dataTransfer?.files;
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

    let dataFile:any[] = []; // Limpiar datos previos

    worksheet.eachRow((row, rowNumber) =>dataFile.push(row.values))

    this.dataFile.set(dataFile);
  }


}
