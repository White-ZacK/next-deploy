import '@styles/globals.css';
import Provider from "@components/Provider";


const RootLayout = ({ children }) => {

  return (
    <html>
        <body>
         <Provider>
            <main>             
                {children}
            </main>
          </Provider>
        </body>
    </html>
  )
}

export default RootLayout;