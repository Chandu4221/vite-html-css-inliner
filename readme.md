## Vite CSS Inliner

Converts the `.css` and `.scss` classes into `inline` styles in `index.html`
Can be used for creating email templates

1.  Clone the repository
2.  install dependencies
    ```
    npm install
    ```
3.  to build the project

        ```
        npm run build
        ```

## Before

1.  src/index.html

    ```html
    <body class="red">
      <div class="yellow box"></div>
    </body>
    ```

2.  src/css/style.css

    ```css
    .box {
      height: 20px;
      width: 20px;
    }
    ```

3.  src/scss/style.scss

    ```scss
    .red {
      background-color: red;
      .yellow {
        background-color: yellow;
      }
    }
    ```

## After

1. dist/index.html
   ```html
   <body style="background-color: red">
     <div style="height: 20px; width: 20px; background-color: #ff0"></div>
   </body>
   ```
