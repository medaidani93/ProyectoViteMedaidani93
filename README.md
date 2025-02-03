# 📌 Resumen del Trabajo en Git y GitHub : 

Hoy hemos trabajado con **Git y GitHub**, centrándonos en el flujo de trabajo de **gestión de versiones y colaboración en equipo**.

---

## 1️⃣ Creación y Cambio de Ramas  
- Creamos una nueva rama llamada `feature-ui` para trabajar en una funcionalidad específica sin afectar la rama principal (`main`).  
- Usamos el comando:  
  ```bash
  git checkout feature-ui
  ```  
  para movernos a la nueva rama y trabajar desde ahí.  

---

## 2️⃣ Verificación del Estado del Repositorio  
- Utilizamos `git status` para ver qué archivos habían sido modificados y cuáles estaban listos para ser confirmados en un commit.  

---

## 3️⃣ Agregar Cambios y Realizar un Commit  
- Usamos:  
  ```bash
  git add .
  ```  
  para añadir todos los archivos modificados al área de preparación.  
- Luego, con:  
  ```bash
  git commit -m "Mensaje del commit"
  ```  
  guardamos los cambios en el historial del repositorio.  

---

## 4️⃣ Subir Cambios a GitHub (`git push`)  
- Ejecutamos:  
  ```bash
  git push origin feature-ui
  ```  
  para subir los cambios de la rama `feature-ui` al repositorio remoto en GitHub.  
- Esto permitió que otros miembros del equipo pudieran ver y revisar los cambios.  

---

## 5️⃣ Creación de un Pull Request (PR)  
- Desde **GitHub**, abrimos un **Pull Request** para proponer la fusión de `feature-ui` con `main`.  
- En este paso, revisamos los cambios y aseguramos que no hubiera conflictos con la rama principal.  

---

## 6️⃣ Aprobación y Fusión del Pull Request (Merge)  
- Una vez aprobados los cambios, hicimos un **merge** de `feature-ui` en `main`.  
- Para mantener el repositorio limpio, eliminamos la rama `feature-ui` con:  
  ```bash
  git branch -d feature-ui
  ```  

---

## 7️⃣ Actualización Local (`git pull`)  
- Finalmente, sincronizamos nuestro repositorio local con los cambios actualizados en **GitHub** ejecutando:  
  ```bash
  git pull origin main
  ```  
- De esta manera, nos aseguramos de estar trabajando con la última versión del proyecto.  

---

## 📌 **Conclusión**  
Hoy hemos completado el flujo de trabajo básico en **Git y GitHub**, aprendiendo a:  
✅ Crear y gestionar ramas.  
✅ Hacer cambios, agregarlos y confirmarlos con commits.  
✅ Subir cambios a **GitHub** y colaborar con **Pull Requests**.  
✅ Fusionar cambios en la rama principal (`main`).  
✅ Mantener el repositorio local actualizado.  


## 9. Enlaces de Imágenes Relacionadas

- ![Imagen 1](https://drive.google.com/uc?export=view&id=1aw9hy3gg7L2cT9sweiMLtCa1iRjLwKcl)
- ![Imagen 2](https://drive.google.com/uc?export=view&id=1uJKAYbddsDkGIG8ZaQQi3vivomGlr01E)
- ![Imagen 3](https://drive.google.com/uc?export=view&id=1Vi2wTeHBWuU-9QzNu2mQ2Dntdpfdd46P)
- ![Imagen 4](https://drive.google.com/uc?export=view&id=1KjFMXaeDxB3LZrcmRL9H9TaasQghwOEV)
- ![Imagen 5](https://drive.google.com/uc?export=view&id=1M8vOkl5TKlOjWC_UBaIrAwd7VQjWPV92)
- ![Imagen 6](https://drive.google.com/uc?export=view&id=13erJGAGm4fmoRNQ9oqR8svIAjpP5u1jZ)
- ![Imagen 7](https://drive.google.com/uc?export=view&id=1qgwyXqh38zSEDATYJvHv-BW7-wPO4jSk)
- ![Imagen 8](https://drive.google.com/uc?export=view&id=1NJq-9QxARDSqx6tQjIbMwhLceMfOtIyK)
- ![Imagen 9](https://drive.google.com/uc?export=view&id=1l5uGwy8mLBgY6PrIIp-CoX-oHwNUv-Eb)
- ![Imagen 10](https://drive.google.com/uc?export=view&id=1kRmrAi5C6evM22Zi3H9IBag5lRdt2D5p)
- ![Imagen 11](https://drive.google.com/uc?export=view&id=13TERYBCxrefU40ZmE73cruoa6RKZlkhY)
- ![Imagen 12](https://drive.google.com/uc?export=view&id=16-aqAbne_xwAM8AhevKnumWW4rxzeBRt)
- ![Imagen 13](https://drive.google.com/uc?export=view&id=1stGxXJdDinqdX698tHUbtq6SFIglB1pp)
- ![Imagen 14](https://drive.google.com/uc?export=view&id=1woGAcg09fFIonAxmMsHzCTKUpeg4noEg)
- ![Imagen 15](https://drive.google.com/uc?export=view&id=1Zjo6TGT7NWHz_vYgMiLnFSIbdAV_2vr4)
- ![Imagen 16](https://drive.google.com/uc?export=view&id=1fknVd_Ijmsk0BIkgMrCKm03UrEWf56XZ)
- ![Imagen 17](https://drive.google.com/uc?export=view&id=1_xKKVxlzSD3YXUwRSEWZqcz-37IYSSH1)
- ![Imagen 18](https://drive.google.com/uc?export=view&id=1xeIUsOLq3_5nSt6lbxshZy_I2fMtWwg2)
- ![Imagen 19](https://drive.google.com/uc?export=view&id=1Xkd4iqnw29zdUa6q3UGC77VzZFBXaPYx)
- ![Imagen 20](https://drive.google.com/uc?export=view&id=1TaXGrMUux5AOxfwhw-VdfncfClQiPw8q)
- ![Imagen 21](https://drive.google.com/uc?export=view&id=1Ts3NWk-fL28Vqg9BNLS_Zag4-YqFCids)
- ![Imagen 22](https://drive.google.com/uc?export=view&id=1tvj75ovJrnnFH-QwVg9cc1FDkfTJnARW)
- ![Imagen 23](https://drive.google.com/uc?export=view&id=1W74dgIsDfhzk1ItQy2CfmREue4mE-pCV)
- ![Imagen 24](https://drive.google.com/uc?
