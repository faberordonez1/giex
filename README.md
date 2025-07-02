# Giex

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.3.

## Water css
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

# Config Java Ubuntu

```bash
sudo apt update
```
```bash
sudo apt install openjdk-17-jdk
```
Se agrega la variable de entorno
```bash
code ~/.bashrc
```
```bash
nano ~/.bashrc
```

Se configura al final del archivo bashrc
```bash
export JAVA_HOME=$(dirname $(dirname $(readlink -f $(which java))))
export PATH=$JAVA_HOME/bin:$PATH
```

Ver si la variable existe y esta bien configurada
```bash
echo $JAVA_HOME
```

Validar la ruta de instalación de Java
```bash
readlink -f $(which java)
```

### Maven
```bash
sudo apt update
sudo apt install maven
```
Validar versión
```bash
mvn -v
```

Configurar settings.xml (opcional)
```bash
code ~/.m2/settings.xml
```

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 
          https://maven.apache.org/xsd/settings-1.0.0.xsd">

  <!-- Carpeta local del repositorio (por defecto es ~/.m2/repository) -->
  <localRepository>/home/faber/.m2/repository</localRepository>

  <!-- Configuración de proxies si estás detrás de uno (opcional) -->
  <!--
  <proxies>
    <proxy>
      <id>proxy-default</id>
      <active>true</active>
      <protocol>http</protocol>
      <host>proxy.miempresa.com</host>
      <port>8080</port>
      <username>usuario</username>
      <password>contraseña</password>
      <nonProxyHosts>localhost|127.0.0.1</nonProxyHosts>
    </proxy>
  </proxies>
  -->

  <!-- Mirrors: acelerar descargas (por ejemplo, usar mirror de Maven Central) -->
  <mirrors>
    <mirror>
      <id>central</id>
      <name>Maven Central Mirror</name>
      <url>https://repo.maven.apache.org/maven2</url>
      <mirrorOf>central</mirrorOf>
    </mirror>
  </mirrors>

  <!-- Configuración de perfiles si tienes varios entornos -->
  <profiles>
    <profile>
      <id>default</id>
      <activation>
        <activeByDefault>true</activeByDefault>
      </activation>
      <properties>
        <!-- Aquí puedes poner propiedades personalizadas -->
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <java.version>17</java.version>
      </properties>
    </profile>
  </profiles>

</settings>
```
Validar que maven lo toma
```
mvn help:effective-settings
```

Se configuro h2 en el properties como BD para que levante




