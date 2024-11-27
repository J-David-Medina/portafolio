export const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-5 mt-40">
      <div className="text-center">
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/J-David-Medina" target="_blank">
            <img width="35" height="40" src="https://img.icons8.com/ios-filled/50/github.png" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/juan-david-agudelo-30b24b22b/" target="_blank">
            <img width="35" height="35" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" />
          </a>
          <a href="mailto:juandavidmedina398@gmail.com" target="_blank">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/material-outlined/24/new-post.png"
              alt="Enviar correo a juandavidmedina398@gmail.com"
            />
          </a>
        </div>
        <p>Derechos de autor © 2024 • David Medina</p>
      </div>
    </footer>
  );
};
