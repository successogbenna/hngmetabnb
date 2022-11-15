import { createContext, useState, useContext } from "react";

const AppContext = createContext(null)

export const useAppContext = () => {
    const context = useContext(AppContext)

    return context;
}

const ContextProvider = ({children}) => {
    const [wallet, setWallet] = useState(false)
    const [click, setClick] = useState(false)
    const [nav, setNav] = useState(false)


    window.addEventListener('scroll', () => {
        if(window.scrollY >= 50) {
            setNav(true)
        } else {
            setNav(false)
        }
    })

    const handleClose = (e) => {
        setWallet(false)

        if(wallet === true) {
            document.querySelector('body').style.overflow = 'scroll'
        }
    }

    const handleClicks = () => {
        setClick(!click)
    }

    const handleClick = () => {
        setWallet(true)

        setClick(!click)

        window.scrollTo({top: 0, behavior: 'smooth', duration: 500})

        if (wallet === false) {
            document.querySelector('body').style.overflow = 'hidden'
        }
      }

    return (
        <AppContext.Provider 
        value={{wallet, handleClick, 
        handleClose, 
        handleClicks, 
        click,
        nav,
        }}
        >
            {children}
        </AppContext.Provider>
    )
}


export default ContextProvider;