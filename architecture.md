src/
 ├── app/
 │   ├── core/
 │   │   ├── guards/
 │   │   │   ├── auth.guard.ts         # Guard per la protezione delle rotte
 │   │   ├── interceptors/
 │   │   │   ├── auth.interceptor.ts   # Interceptor per aggiungere token o manipolare richieste
 │   │   ├── services/
 │   │   │   ├── auth.service.ts       # Servizio per l'autenticazione
 │   │   ├── models/
 │   │   │   ├── user.model.ts         # Modelli per i dati (ad esempio, utenti)
 │   │   ├── utils/
 │   │   │   ├── date.util.ts          # Utilità generali (es. funzioni di data)
 │   │   └── core.module.ts            # Il modulo principale per tutto ciò che è condiviso
 │   ├── feature1/
 │   │   ├── components/
 │   │   │   ├── feature1.component.ts # Componente della feature 1
 │   │   ├── services/
 │   │   │   ├── feature1.service.ts   # Servizio specifico per la feature 1
 │   │   ├── feature1.module.ts        # Modulo per la feature 1
 │   ├── feature2/
 │   │   ├── components/
 │   │   │   ├── feature2.component.ts # Componente della feature 2
 │   │   ├── services/
 │   │   │   ├── feature2.service.ts   # Servizio specifico per la feature 2
 │   │   ├── feature2.module.ts        # Modulo per la feature 2
 │   ├── shared/
 │   │   ├── components/
 │   │   │   ├── button.component.ts   # Componente condiviso (ad esempio, un bottone)
 │   │   ├── pipes/
 │   │   │   ├── uppercase.pipe.ts     # Pipe condiviso
 │   │   └── shared.module.ts          # Modulo per i componenti e servizi condivisi
 │   ├── app-routing.module.ts         # Modulo di routing principale
 │   ├── app.component.ts              # Componente principale
 │   ├── app.module.ts                 # Modulo principale
 ├── assets/
 │   ├── images/
 │   └── styles/
 ├── environments/
 │   ├── environment.ts                # Variabili di ambiente per lo sviluppo
 │   ├── environment.prod.ts           # Variabili di ambiente per la produzione
 └── index.html
