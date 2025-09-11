import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Login() {
  const [activeTab, setActiveTab] = useState("login"); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [name, setName] = useState(""); 
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      navigate("/home");
    } else {
      alert("Email ou senha inválidos!");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      alert("Este email já está cadastrado!");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    
    alert("Cadastro realizado com sucesso!");
    setActiveTab("login");
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  // ✅ Login com Google usando apenas JavaScript
  const handleGoogleLogin = () => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "528992441871-72i8f5fkqa0g0a054v7ia0eb31sqhluu.apps.googleusercontent.com", // substitua pelo seu Client ID do Google
      callback: handleGoogleCallback,
    });
    google.accounts.id.prompt(); // Abre o popup de login
  };

  const handleGoogleCallback = (response) => {
    const userObject = parseJwt(response.credential);

    // Armazena dados básicos do usuário
    localStorage.setItem("user", JSON.stringify({
      name: userObject.name,
      email: userObject.email,
      picture: userObject.picture,
    }));

    navigate("/home");
  };

  // Decodifica o token JWT recebido do Google
  function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  const handleAppleLogin = () => {
    alert("Login com Apple ainda não implementado.");
  };

  return (
    <div className="main-container">
      {/* Lado esquerdo */}
      <div className="cinema-side">
        <div className="cinema-image"></div>
        <h2>Hora de transformar sua experiência cinematográfica.</h2>
        <p>Descubra os melhores filmes e séries do momento em nossa plataforma.</p>
      </div>

      {/* Lado direito */}
      <div className="auth-side">
        <div className="auth-tabs">
          <div 
            className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            ENTRAR
          </div>
          <div 
            className={`auth-tab ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            CADASTRAR
          </div>
        </div>

        <div className="login-container">
          {activeTab === "login" && (
            <>
              <div className="social-login">
                <button onClick={handleGoogleLogin}>
                  <img 
                    src="/icons/google.png" 
                    alt="Google Icon"
                    className="icon"
                  />
                  Fazer Login com o Google
                </button>
                <button onClick={handleAppleLogin}>
                  <img 
                    src="/icons/apple.png" 
                    alt="Apple Icon"
                    className="icon"
                  />
                  Fazer login com Apple
                </button>
              </div>
              
              <form onSubmit={handleLogin}>
                <div className="input-group">
                  <img 
                    src="/icons/email.png" 
                    alt="Email Icon"
                    className="input-icon"
                  />
                  <input
                    type="email"
                    placeholder="Seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="input-group">
                  <img 
                    src="/icons/lock.png" 
                    alt="Password Icon"
                    className="input-icon"
                  />
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <img
                    src={`/icons/${isPasswordVisible ? "visibility.png" : "visibility_off.png"}`}
                    alt="Toggle Password Visibility"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    className="toggle-password"
                  />
                </div>
                
                <button type="submit" className="submit-button">
                  ENTRAR
                </button>
              </form>
              
              <p className="forgot-password">Esqueceu sua senha?</p>
            </>
          )}

          {activeTab === "register" && (
            <>
              <div className="social-login">
                <button onClick={handleGoogleLogin}>
                  <img 
                    src="/icons/google.png" 
                    alt="Google Icon"
                    className="icon"
                  />
                  Cadastrar com o Google
                </button>
                <button onClick={handleAppleLogin}>
                  <img 
                    src="/icons/apple.png" 
                    alt="Apple Icon"
                    className="icon"
                  />
                  Cadastrar com Apple
                </button>
              </div>
              
              <form onSubmit={handleRegister}>
                <div className="input-group">
                  <img 
                    src="/icons/user.png" 
                    alt="User Icon"
                    className="input-icon"
                  />
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <img 
                    src="/icons/email.png" 
                    alt="Email Icon"
                    className="input-icon"
                  />
                  <input
                    type="email"
                    placeholder="Seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="input-group">
                  <img 
                    src="/icons/lock.png" 
                    alt="Password Icon"
                    className="input-icon"
                  />
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <img
                    src={`/icons/${isPasswordVisible ? "visibility.png" : "visibility_off.png"}`}
                    alt="Toggle Password Visibility"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    className="toggle-password"
                  />
                </div>

                <div className="input-group">
                  <img 
                    src="/icons/lock.png" 
                    alt="Confirm Password Icon"
                    className="input-icon"
                  />
                  <input
                    type="password"
                    placeholder="Confirmar senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                
                <button type="submit" className="submit-button">
                  CADASTRAR
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
