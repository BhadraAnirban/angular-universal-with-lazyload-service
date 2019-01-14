## angular-universal-with-lazyload-service

### For angular universal setup, one can follow the document of - https://github.com/BhadraAnirban/angular-universal

### Build commands-

ng run appointmentmaker:server

npm run build:ssr && npm run serve:ssr

### Urls to play around (After building this solution)-

http://localhost:4400/

http://localhost:4400/static/contact – use of Lazy loading

http://localhost:4400/sms-reviews?physician_id=261&key=QPvDstSUdstSxIDWGxmRacd&patient_id=1058

### Module and component structure

module - AppRouting

module - 'App' => Components - 'Home', 'header'

module - 'Static' => Components - 'Contact' - for lazy loading

module - 'Component' => Components - 'smsreviews'
