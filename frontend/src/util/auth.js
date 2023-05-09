import { redirect } from "react-router-dom";

// token zamanını hesaplayıcı
export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration; 
}

export function getAuthToken() {
  
    const token = localStorage.getItem('token');

    if (!token) {
      return null;
    }

    // token zaman koşulu
    const tokenDuration = getTokenDuration();
    if (tokenDuration < 0 ) {
      return 'EXPIRED';
    }

    return token;

}

// root/kök dosyasında bölümünde tokeni kullanmak için diğer dosyalar useRouteLoaderData işleviyle buna erişecek ve token olması/olmaması durumunda koşullu içerik oluşturacak.
export function tokenLoader() {
    return getAuthToken();
}

export function checkAuthLoader() {
    // this function will be added in the next lecture
    // make sure it looks like this in the end
    const token = getAuthToken();
    
    if (!token) {
      return redirect('/auth');
    }
   
    return null; // this is missing in the next lecture video and should be added by you
  }