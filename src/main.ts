import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// MSAL
import { MsalModule } from '@azure/msal-angular';
import { PublicClientApplication, InteractionType } from '@azure/msal-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


(async () => {
  // 1) Creas tu instancia de MSAL:
  const pca = new PublicClientApplication({
    auth: {
      clientId: '1ae665d3-4796-4dcb-b91e-8525d0f6f20a',
      authority: 'https://login.microsoftonline.com/825ddf13-4f57-4545-b053-2ae336651320',
      redirectUri: 'http://localhost:4200',
    },
    // system: { asyncJIT: true }  // normalmente ya viene true por defecto en versiones nuevas
  });

  // 2) Esperas su inicialización
  await pca.initialize();

  // 3) Ahora sí importas MsalModule con esa instancia
  bootstrapApplication(AppComponent, {
    providers: [
      ...appConfig.providers,
      provideHttpClient(),
      importProvidersFrom(
        BrowserModule,
        MsalModule.forRoot(
          pca,
          {
            interactionType: InteractionType.Popup,
            authRequest: { scopes: ['user.read'] },
          },
          {
            interactionType: InteractionType.Redirect,
            protectedResourceMap: new Map([
              ['https://graph.microsoft.com/v1.0/me', ['user.read']],
            ]),
          }
        )
      ), provideAnimationsAsync(),
    ]
  })
    .catch(err => console.error(err));
})();
