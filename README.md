# Giex

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.3.

## SheetJS (xlsx)

```bash
npm install xlsx
npm install @types/node --save-dev
```
## Excel Js
```bash
npm install exceljs
```

```typescript
  import * as ExcelJS from 'exceljs';

  async readExcelWithExcelJS(file: File) {
    const workbook = new ExcelJS.Workbook();
    const arrayBuffer = await file.arrayBuffer();
    
    await workbook.xlsx.load(arrayBuffer);
    
    const worksheet = workbook.getWorksheet(1);
    if(!worksheet) return;

    this.dataFile = []; // Limpiar datos previos

    worksheet.eachRow((row, rowNumber) =>this.dataFile.push(row.values))
  }
```