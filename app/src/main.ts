import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import AppModule from 'src/app/modules/app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // eslint-disable-next-line no-console
  .catch((err) => console.error(err));
