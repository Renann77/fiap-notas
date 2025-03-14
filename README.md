# 📘 CP1 - Mobile - Validação de Notas

## 👥 Integrantes
| Nome | RM |
|-------|------|
| **Renan Dorneles Boucault** | 557820 |
| **Igor Dias Barrocal** | 555217 |

---

## 📌 **Descrição do Projeto**
Este projeto é um aplicativo desenvolvido em **React Native** para a **avaliação de notas de alunos**, seguindo as regras acadêmicas da FIAP. O app permite inserir notas, validar a situação do aluno e verificar se ele está **aprovado ou reprovado** com base na média e no número de faltas.

---

## 🏆 **Objetivo do Projeto**
✅ **Inserir três notas e o número de faltas**  
✅ **Validar a situação do aluno conforme as regras da FIAP**  
✅ **Exibir mensagens de aprovado ou reprovado corretamente**  
✅ **Resetar os campos ao clicar no logo da FIAP**  

---

## 🖥️ **Tecnologias Utilizadas**
- **React Native**
- **Expo**
- **TypeScript**
- **Styled Components**
- **Hooks do React (`useState`, `useWindowDimensions`)**

---

## 🎨 **Layout da Aplicação**
A tela principal contém:
- **Logo da FIAP** (clicável para resetar os campos)
- **Campos de entrada** para as notas e faltas
- **Botão de validação**
- **Mensagem indicando aprovação ou reprovação**

### 📸 **Modo Retrato**
> ![Print do modo retrato](./assets/screenshot-portrait.png)

### 📸 **Modo Paisagem**
> ![Print do modo paisagem](./assets/screenshot-landscape.png)

---

## 📌 **Regras de Validação**
O sistema segue as regras acadêmicas da **FIAP**:
1️⃣ **Se o aluno tiver mais de 10 faltas →** ❌ "Reprovado por falta"  
2️⃣ **Se a média final for menor que 6 →** ❌ "Reprovado por nota"  
3️⃣ **Se atender os critérios →** ✅ "Aprovado com média de X.XX"  

🔹 **Cálculo da Média**  
- A menor das três notas é descartada  
- A média é feita com as **duas maiores notas**  
- O resultado é exibido com **duas casas decimais**  

---

## 🔍 **Funcionalidades**
✔ **Campos de entrada para notas e faltas**  
✔ **Botão para validar a situação do aluno**  
✔ **Mensagens de feedback claras**  
✔ **Botão para resetar os campos (clicando no logo da FIAP)**  
✔ **Responsividade (adapta-se a diferentes telas)**  

---

## 🚀 **Como Rodar o Projeto**
### **1️⃣ Clonar o Repositório**
```sh
git clone https://github.com/seu-usuario/fiap-notas.git
cd fiap-notas
