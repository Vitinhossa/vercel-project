import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'
import Skeleton from 'react-loading-skeleton'
import useSWR from 'swr';


//api here is an axios instance which has the baseURL set according to the env.
import api from '../services/api';


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const router = useRouter();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function ChangeUser(user)
    {
      if(user)
      setUser(user);
    }

    useEffect(() => {

      async function loadUserFromCookies() {

            const token = Cookies.get('token')
            if (token) {
                api.defaults.headers.Authorization = `PixLand ${token}`
                const { data: user } = await api.post('Info/Home')
                if(user.token == false)
                  logout('','');

                if (user) setUser(user);
            }

            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    const login = async (codeValue, password) => {
        const { data: token } = await api.post('auth/login', { codeValue, password })
        if (token.token) {
            console.log("Got token")
            Cookies.set('token', token.token, { expires: 60 })
            api.defaults.headers.Authorization = `Bearer ${token.token}`
            //const { data: user } = await api.get('users/me')
            setUser(token.token)
            window.location.pathname = '/home'
            return true;
            //console.log("Got user", user)
        }
        else {

          return null;
        }
    }
    const registro = async (token) => {

        Cookies.set('token', token, { expires: 60 })
        api.defaults.headers.Authorization = `Bearer ${token}`
        //const { data: user } = await api.get('users/me')
        setUser(token)
        window.location.pathname = '/planos'
        return true;

  }

    const logout = (email, password) => {
        Cookies.remove('token')
        setUser(null)
        delete api.defaults.headers.Authorization
        window.location.pathname = '/'
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, registro, loading, logout, ChangeUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const ProtectRoute = ({ children }) => {
  const { isAuthenticated, loading, ChangeUser, user, logout } = useAuth();
  const router = useRouter();
  function isPageOk(){
    if(window.location.pathname == '/login') return true;
    if(window.location.pathname == '/login/paravoce') return true;
    if(window.location.pathname == '/login/paraseunegocio') return true;
    if(window.location.pathname == '/login/recuperarsenha') return true;

    if(window.location.pathname == '/register') return true;
    if(window.location.pathname == '/register/paravoce') return true;
    if(window.location.pathname == '/register/paraseunegocio') return true;
    //if(window.location.pathname == '/register/paraseunegocio/tenhoconta') return true;
    if(window.location.pathname == '/register/paraseunegocio/naotenhoconta') return true;
    if(window.location.pathname == '/tutorial') return true;
    if(window.location.pathname == '/tutorial/retirada') return true;
    if(window.location.pathname == '/tutorial/deposito') return true;
    if(window.location.pathname == '/tutorial/cadastro') return true;
    if(window.location.pathname == '/tutorial/conectar') return true;
    if(window.location.pathname == '/tutorial/outraConta') return true;
    if(window.location.pathname == '/tutorial/convide') return true;
    if(window.location.pathname == '/tutorial/conselho') return true;
    if(window.location.pathname == '/tutorial/recuperarSenha') return true;
    if(window.location.pathname == '/tutorial/pin') return true;
    if(window.location.pathname == '/tutorial/doisFatores') return true;
    if(window.location.pathname == '/tutorial/alterarSenha') return true;
    if(window.location.pathname == '/tutorial/mentoria') return true;
    if(window.location.pathname == '/offers') return true;
    if(window.location.pathname == '/mail') return true;
    if(window.location.pathname == '/feedback') return true;
    if(window.location.pathname == '/') return true;
    if (window.location.pathname.startsWith('/offers/')) return true;
  }
  function canAccessLogued(){
    if(isPageOk()) return true;
    const url = window.location.pathname;
    const publicPaths = [
      '/login',
      '/login/paravoce',
      '/login/paraseunegocio',
      '/login/recuperarsenha',
      '/register',
      '/register/paravoce',
      '/planos',
      '/cartoes',
      '/extract',
      '/comprovantes',
      '/home',
      '/convideseusamigos',
      '/acordospoliticastermos',
      '/meuplano',
      '/meusdados',
      '/meusdados/alterarsenha',
      '/meusdados/alterarpin',
      '/meusdados/alterarnome',
      '/pix',
      '/pix/alterarlimite',
      '/pix/copia-cola',
      '/pix/qrcode',
      '/pix/depositar',
      '/pix/minhaschaves',
      '/pix/minhaschaves/registrar/aleatoria',
      '/pix/minhaschaves/registrar/cpf',
      '/pix/minhaschaves/registrar/cnpj',
      '/pix/minhaschaves/registrar/email',
      '/pix/minhaschaves/registrar/celular',
      '/pix/transferencia',
      '/transferencia',
      '/transferencia/10x',
      '/agregacao',
      '/agregacao/contasbancarias',
      '/gestorfinanceiro',
      '/reembolso/pix',
      '/recargacelular',
      '/store10x',
      '/store10x/paravoce',
      '/pagamentos',
      '/pagamentos/boleto',
      '/convideseusamigos',
      '/recebimentos',
      '/transacoes',
      '/',
      '/investimentos',
      '/investimentos/novo'
    ];
    const path = url.split('?')[0];
    console.log(path);
    if (publicPaths.includes(path)) {
      return true;
    }

  }
  if (typeof window !== "undefined") {
    // browser code
    if (loading){
      //return <LoadingScreen />;
      return <Skeleton height={300} count={1} />;
    }
    else if(!isAuthenticated && !isPageOk()){
      //console.log(isAuthenticated)
      return  window.location.pathname = '/'
    }
    if(isAuthenticated && !canAccessLogued()){
      //console.log('Logado e n permitido')
      return  window.location.pathname = '/home'
    }
    if(isAuthenticated && user)
    {
      const token = Cookies.get('token')
      const fetcher = (url) => fetch(url, {
        method: 'post',
        headers: new Headers({
          'Authorization': 'PixLand '+token,
          'Content-Type': 'application/x-www-form-urlencoded'
        })}).then((res) => res.json());
        try{
          const { data, mutate, error } = useSWR('https://api-operacao-sarmento.pixland.com.br/Info/Home', fetcher);
          //console.log(data);
          if(data.token == false)
          logout('','');
          ChangeUser(data);
        }catch(e){

        }

    }

  }

  return children;
};



export const useAuth = () => useContext(AuthContext)
