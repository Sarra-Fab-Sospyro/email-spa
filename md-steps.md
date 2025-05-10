# Progetto SPA Angular per Sistema Email

## Panoramica
Questo documento delinea i passaggi per creare una Single Page Application (SPA) con Angular per un sistema di gestione email. L'applicazione utilizzerà un server mock con file JSON ed ExpressJS per simulare un backend.

## Struttura dell'Applicazione
L'applicazione seguirà un pattern "wizard" (procedura guidata) a due step con una visualizzazione finale dei dati inviati.

## Passaggi di Implementazione

### 1. Setup del Progetto
- Installare Node.js e npm
- Installare Angular CLI: `npm install -g @angular/cli`
- Creare un nuovo progetto: `ng new email-spa`
- Navigare nella directory: `cd email-spa`
- Avviare il server di sviluppo: `ng serve --open`

### 2. Struttura del Progetto
- Creare i componenti principali:
  ```
  ng generate component components/step-one
  ng generate component components/step-two
  ng generate component components/email-grid
  ng generate component shared/header
  ng generate component shared/footer
  ```
- Creare i servizi necessari:
  ```
  ng generate service services/email
  ng generate service services/data-sharing
  ```
- Configurare i modelli (models) per i dati:
  ```
  ng generate interface models/email
  ```

### 3. Configurazione del Routing
- Configurare il routing in `app-routing.module.ts`:
  - Route per Step 1 (/step-one)
  - Route per Step 2 (/step-two)
  - Route per la griglia dei messaggi (/email-grid)
  - Reindirizzamento predefinito a Step 1

### 4. Implementazione dei Componenti

#### Step One Component
- Form con:
  - Campo OGGETTO (input text, obbligatorio)
  - Campo TIPO MAIL (dropdown, obbligatorio)
    - Opzioni: Normale, Confidenziale, Informale, Formale
  - Campo SERVIZIO (dropdown, obbligatorio)
    - Opzioni: Gmail, Outlook, Libero
  - Bottone AGGIUNGI SERVIZIO
  - Tabella mini per servizi aggiunti
  - Bottone SALVA E PROSEGUI
- Implementare la validazione del form
- Aggiungere logica per il popup di conferma
- Salvare i dati nel service e navigare a Step 2

#### Step Two Component
- Mostrare RECAP dei dati inseriti in Step 1
- Form con:
  - Campo TESTO (textarea/editor, obbligatorio)
  - Campo DESTINATARIO (input text, obbligatorio)
  - Bottone INVIA MAIL
- Implementare la validazione del form
- Al click su INVIA MAIL, salvare i dati completi e reindirizzare alla griglia

#### Email Grid Component
- Tabella che mostra tutti i messaggi inviati
- Colonne: DESTINATARIO, OGGETTO, TIPO MAIL
- Opzioni di filtro e ordinamento (opzionali)

### 5. Servizi

#### Email Service
- Metodi per comunicare con il server mock:
  - `saveEmailData()`: salvare i dati del form
  - `getAllEmails()`: recuperare tutti i messaggi
  - `addService()`: aggiungere un servizio
  
#### Data Sharing Service
- Gestire lo stato condiviso tra i componenti
- Memorizzare temporaneamente i dati tra Step 1 e Step 2

### 6. Server Mock con ExpressJS
- Creare un nuovo progetto: `mkdir email-server && cd email-server && npm init -y`
- Installare ExpressJS: `npm install express cors body-parser`
- Creare file JSON per i dati: `emails.json`, `services.json`
- Implementare gli endpoint:
  - GET `/emails`: ottenere tutti i messaggi
  - POST `/emails`: salvare un nuovo messaggio
  - GET `/services`: ottenere tutti i servizi
  - POST `/services`: aggiungere un nuovo servizio

### 7. Integrazione e Test
- Connettere la SPA Angular al server mock
- Implementare gestione degli errori e loading states
- Testare il flusso completo dell'applicazione
- Verificare la validazione dei form e la persistenza dei dati

### 8. Miglioramenti (Opzionali)
- Aggiungere stili CSS/SCSS personalizzati
- Implementare un editor ricco per il campo TESTO
- Aggiungere animazioni tra i passaggi
- Implementare funzionalità di ricerca nella griglia
- Aggiungere test unitari e end-to-end

## Note Tecniche
- Utilizzare Reactive Forms per gestire i form e la validazione
- Implementare le interfacce TypeScript per tutti i modelli di dati
- Utilizzare l'Interceptor HTTP di Angular per gestire le richieste al server mock
- Considerare l'uso di Angular Material o Bootstrap per i componenti UI