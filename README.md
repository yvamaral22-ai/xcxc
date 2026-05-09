# SGI OS

Portal corporativo para gestão integrada de segurança, auditoria, governança documental e acessos operacionais.

## Base usada

O projeto foi iniciado a partir do HTML `PORTAL SGI AUDITORIA.html`, mantendo os principais conceitos:

- SGI OS como central institucional.
- Acessos reais para VES, SharePoint SESMT, Inspeção N3, DDS, EPI e suporte.
- Painel executivo com indicadores.
- Módulos de Segurança do Trabalho, Meio Ambiente, Treinamentos e Governança.
- Camada de auditoria, evidências e roteiro de evolução.

## Como rodar

Modo recomendado:

```bash
npm start
```

Depois acesse `http://localhost:3000`.

Ao rodar pelo servidor, o portal salva registros de EPI e métricas de uso em `data/sgi-db.json`. Esse arquivo é criado automaticamente e fica fora do Git para evitar publicar dados operacionais.

Fallback: abrir `index.html` direto no navegador ainda funciona, mas os registros ficam restritos ao `localStorage` daquele navegador.

## Validação

```bash
npm run check
```

## Estrutura

- `index.html`: estrutura principal do portal.
- `styles.css`: identidade visual e responsividade.
- `app.js`: dados dos módulos, integrações, auditoria e interações.
- `server.js`: servidor Node nativo, API local e persistência JSON.
- `data/sgi-db.json`: base local criada em tempo de execução.
