#Test Cookie Block

In merito alla normativa EU Cookie Law, è nata l'esigenza di permettere il blocco preventivo dei cookie.

L'hack JS su `document.cookie`, che sovrascrive le funzionalità di lettura e scrittura dei cookie, è utile per quanto riguarda i cookie di **prima parte**, tuttavia non è efficace per i cookie di **terze parti**.

L'esempio qui presente mostra la limitazione dell'hack in caso di script embedded in un iframe.

##Installazione

Per eseguire il test, clonare la repository ed eseguire nella cartella così ottenuta:

```sh
$ npm install
$ sudo gulp serve
```

Modificare il file degli host aggiungendo:

```
127.0.0.1 test-host1.local
127.0.0.1 test-host2.local
```

Per vedere i test, puntare il browser su [http://test-host1.local]() ed ispezionare i cookie impostati.
