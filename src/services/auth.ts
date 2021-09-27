export default function Signin () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'aijeajiejiajeijaiejiajeiijeeajia',
        user:  {
          name: 'denis',
          pass: '1234'
        }
      });
    },2000);
  });
}