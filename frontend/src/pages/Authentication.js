import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import Footer from '../components/Footer';
import React from 'react';

function AuthenticationPage() {
  return (
    <React.Fragment>
      <AuthForm />
      <Footer />
    </React.Fragment>
  );
}

export default AuthenticationPage;

export async function action({ request }) {
  // mevcut url adresimi alıyorum o anki
  const searchParams = new URL(request.url).searchParams;
  // mevcut url adresimden sonra bir action gerçekleştiğinde login ise bunu değişkende saklıyorum
  const mode = searchParams.get('mode') || 'login';

  // tarayıcıya manuel olarak değer girip kandırılabilir bunun için önlem aldım.
  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: 'Unsupported mode.' }, { status: 422 });
  }

  // form da hangi dataları gönderdiysem onlara erişiyorum
  const data = await request.formData();
  // formdata'larımı burada istediğim şartlar yerine gelecek şekilde ayıklıyorum eğer böyleyse diye
  const autoData = {
    email: data.get('email'),
    password: data.get('password'),
  }

  // fetch request gönderiyoruz ve bunun kontrollerini sağlıyoruz.
  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(autoData),
  });

  // Aşağıdaki 2 if'de de olası hataları yönettim
  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({  message: 'Could not authenticate user.' }, { status: 500 });
  }

  // soon: manage that token
  // Gelen verideki tokeni json'dan çıkarıp localstroge da saklıyoruz çünkü bu uygulama tarayıcı da çalışıyor backend de değil o nedenle localstroge da saklmalıyız.
  // token'ımızı yarattık => mesela bunu EventDetail.js dosyasında delete kısmı için kullanacağım.
  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem('token', token); //localstroge de tokeni depoladık ve onu auth.js dosyasında kullanıyoruz işlevde daha sonra diğer dosyalarda da auth dosyasındaki fonksiyonu kullanacağım.

// istek gönderip giriş yaptığımın zamanını alır.
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1 );
  localStorage.setItem('expiration', expiration.toISOString());

  return redirect('/');
}