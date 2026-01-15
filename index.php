<?php
// index.php
// Configuration for the site
$siteName = "SCPC";
$fullName = "Steve Chupe Plomberie";
$phone = "06 62 24 55 31"; 
$email = "stevechupe@yahoo.fr"; 
$address = "13 rue sangueze 44330 Le-pallet";

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $siteName . " - " . $fullName; ?></title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>

    <header>
        <div class="container">
            <div class="nav-flex">
                <div class="logo">
                    <i class="fa-solid fa-wrench"></i> <?php echo $siteName; ?> <span>PLOMBERIE</span>
                </div>
                <nav>
                    <ul>
                        <li><a href="#home">Accueil</a></li>
                        <li><a href="#about">L'Entreprise</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <section id="home" class="hero">
        <div class="hero-content">
            <h1><?php echo $siteName; ?></h1>
            <p><?php echo $fullName; ?></p>
            <p style="font-size: 1rem; color: #00a8cc; margin-top:15px;">PLOMBERIE • CHAUFFAGE • CLIMATISATION</p>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <div class="about-grid">
                <div class="about-text">
                    <h2>Votre Expert en Plomberie</h2>
                    <p>
                        À la recherche d'un artisan de confiance pour vos travaux de plomberie et de chauffage ?
                        <strong><?php echo $fullName; ?></strong> vous accompagne dans la réalisation de vos projets,
                        du dépannage d'urgence à l'installation complète de vos systèmes sanitaires.
                    </p>
                    <p>
                        Pourquoi nous faire confiance ? Avec plusieurs années d'expérience, nous garantissons
                        un travail soigné, des tarifs transparents et une intervention rapide.
                    </p>
                    <a href="#contact" class="btn">Nous Contacter</a>
                </div>
                <div class="about-img">
                    <img src="https://images.unsplash.com/photo-1605218427306-022ba8742a51?auto=format&fit=crop&w=800&q=80" alt="Camionnette SCPC">
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <div class="services-grid">
                <div class="service-card">
                    <img src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80" alt="Plomberie">
                    <div class="service-title">Plomberie</div>
                </div>
                <div class="service-card">
                    <img src="https://images.unsplash.com/photo-1507646227500-4d389b0012be?auto=format&fit=crop&w=600&q=80" alt="Chauffage">
                    <div class="service-title">Chauffage</div>
                </div>
                <div class="service-card">
                    <img src="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=600&q=80" alt="Climatisation">
                    <div class="service-title">Climatisation</div>
                </div>
                <div class="service-card">
                    <img src="https://images.unsplash.com/photo-1581094794329-cd1096d7a43f?auto=format&fit=crop&w=600&q=80" alt="Rénovation">
                    <div class="service-title">Rénovation</div>
                </div>
            </div>
        </div>
    </section>

    <section class="social">
        <div class="container">
            <i class="fa-brands fa-instagram" style="font-size: 3rem; color: #00a8cc; margin-bottom: 15px;"></i>
            <h2>NOTRE COMPTE INSTAGRAM</h2>
            <p style="margin-bottom: 30px; color: #ccc;">Suivez nos dernières réalisations sur les réseaux sociaux.</p>
            
            <div class="insta-grid">
                <div class="insta-item"><img src="https://images.unsplash.com/photo-1621905476438-5f4e27f8d673?auto=format&fit=crop&w=300&q=80" alt="Post"></div>
                <div class="insta-item"><img src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=300&q=80" alt="Post"></div>
                <div class="insta-item"><img src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=300&q=80" alt="Post"></div>
            </div>
        </div>
    </section>

    <div style="background: url('https://images.unsplash.com/photo-1620626012053-1c1f513d2ee3?auto=format&fit=crop&w=1920&q=80'); background-attachment: fixed; background-size: cover; padding: 100px 20px; text-align: center; position: relative;">
        <div style="position: absolute; top:0; left:0; right:0; bottom:0; background: rgba(0,168,204,0.3);"></div>
        <h2 style="position: relative; z-index: 1; font-size: 2rem; text-shadow: 2px 2px 4px #000;">FAITES APPEL À VOTRE PLOMBIER<br>CHAUFFAGISTE À VOTRE SERVICE !</h2>
    </div>

    <section class="contact-bar">
        <div class="container">
            <div class="contact-flex">
                <div class="contact-item">
                    <i class="fa-solid fa-location-dot" style="font-size: 2rem; margin-bottom: 10px;"></i>
                    <h3>ADRESSE</h3>
                    <p><?php echo $address; ?></p>
                </div>
                <div class="contact-item">
                    <i class="fa-solid fa-phone" style="font-size: 2rem; margin-bottom: 10px;"></i>
                    <h3>TÉLÉPHONE</h3>
                    <p><?php echo $phone; ?></p>
                </div>
                <div class="contact-item">
                    <i class="fa-solid fa-envelope" style="font-size: 2rem; margin-bottom: 10px;"></i>
                    <h3>EMAIL</h3>
                    <p><?php echo $email; ?></p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647856865412!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <div class="contact-section">
            <div class="container">
                <h2 style="margin-bottom: 30px;">N'HÉSITEZ PAS À NOUS CONTACTER</h2>
                <div class="form-box">
                    <form action="#" method="POST">
                        <div class="form-group">
                            <label for="name">Nom</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Téléphone</label>
                            <input type="tel" id="phone" name="phone">
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn" style="border:none; cursor:pointer; width:100%;">ENVOYER</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; <?php echo date("Y"); ?> <?php echo $siteName; ?> - Tous droits réservés.</p>
    </footer>

</body>
</html>
