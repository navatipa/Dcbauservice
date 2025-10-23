# DC Bauservice Website

Eine professionelle, vollst\u00e4ndig responsive Website f\u00fcr DC Bauservice Philippsburg, spezialisiert auf Tiefbau, Baggerarbeiten, Abbruch, Kanalbau, Spezialtiefbau und Haus Sanierung.

## 🚀 Deployment auf GitHub Pages & Cheapname.com

### Schritt 1: GitHub Repository erstellen

1. Erstellen Sie ein neues Repository auf GitHub
2. Laden Sie alle Dateien aus dem `public` Ordner hoch

```bash
git init
git add .
git commit -m "Initial commit - DC Bauservice Website"
git branch -M main
git remote add origin https://github.com/IHR-USERNAME/dc-bauservice.git
git push -u origin main
```

### Schritt 2: GitHub Pages aktivieren

1. Gehen Sie zu Repository Settings → Pages
2. W\u00e4hlen Sie Source: `main` Branch
3. W\u00e4hlen Sie Folder: `/root` (da alle Dateien im Root liegen)
4. Klicken Sie auf "Save"

### Schritt 3: Custom Domain (cheapname.com) einrichten

1. Erstellen Sie eine Datei namens `CNAME` im Root-Verzeichnis
2. F\u00fcgen Sie Ihre Domain ein: `dc-bauservice.one`
3. Bei Ihrem Domain-Provider (cheapname.com):
   - F\u00fcgen Sie einen `A` Record hinzu, der auf GitHub Pages IPs zeigt:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - ODER f\u00fcgen Sie einen `CNAME` Record hinzu: `IHR-USERNAME.github.io`
4. Warten Sie 10-20 Minuten f\u00fcr DNS-Propagation

### Schritt 4: HTTPS aktivieren

1. Zur\u00fcck zu GitHub Pages Settings
2. Aktivieren Sie "Enforce HTTPS"

## 📁 Dateistruktur

```
public/
\u251c\u2500\u2500 index.html                  # Homepage
\u251c\u2500\u2500 leistungen.html             # Services page
\u251c\u2500\u2500 baggerarbeiten.html         # Excavation services
\u251c\u2500\u2500 haus-sanierung.html         # House renovation
\u251c\u2500\u2500 kontakt.html                # Contact page
\u251c\u2500\u2500 impressum.html              # Imprint
\u251c\u2500\u2500 blog/
\u2502   \u251c\u2500\u2500 index.html              # Blog listing
\u2502   \u251c\u2500\u2500 post-baugrube.html     # Blog post 1
\u2502   \u251c\u2500\u2500 post-poolbau.html      # Blog post 2
\u2502   \u2514\u2500\u2500 post-energetische-modernisierung.html  # Blog post 3
\u251c\u2500\u2500 css/
\u2502   \u251c\u2500\u2500 styles.css             # Main stylesheet
\u2502   \u2514\u2500\u2500 blog-styles.css        # Blog-specific styles
\u251c\u2500\u2500 js/
\u2502   \u2514\u2500\u2500 main.js                # JavaScript functionality
\u251c\u2500\u2500 sitemap.xml                # SEO sitemap
\u251c\u2500\u2500 robots.txt                 # Search engine instructions
\u2514\u2500\u2500 CNAME                      # Custom domain configuration
```

## \u2728 Features

- ✅ Vollst\u00e4ndig responsive Design (Mobile-first)
- ✅ Schwarz/Gelb Farbschema (#000000 / #FFD700)
- ✅ SEO-optimiert mit Meta-Tags und Keywords
- ✅ Deutsche & Englische Sprachumschaltung
- ✅ Smooth Scroll Animationen (AOS.js)
- ✅ Kontaktformular mit Email-Integration
- ✅ Google Maps Integration
- ✅ WhatsApp Click-to-Chat
- ✅ Blog mit 3 SEO-optimierten Artikeln
- ✅ Sitemap.xml & Robots.txt
- ✅ Schema.org LocalBusiness markup

## 🎨 Design

Das Design orientiert sich an https://menzel-gruppe.de/blog/ mit Verbesserungen:
- Modernere Animationen
- Bessere Farbkontraste
- Optimierte mobile Navigation
- Professionelle Bildauswahl

## 📧 Kontaktformular

Das Kontaktformular nutzt FormSubmit.co f\u00fcr Email-Versand:
- Keine Backend-Konfiguration erforderlich
- Emails werden direkt an dc@bauservice.one gesendet
- Spam-Schutz integriert

## 📱 Kontakt

**DC Bauservice**  
Danijel Cukovic  
Alte Kirchen Stra\u00dfe 4  
76661 Philippsburg  

Telefon: +49 176 83426932  
E-Mail: dc@bauservice.one  
Website: https://dc-bauservice.one

## 📄 Lizenz

© 2025 DC Bauservice. Alle Rechte vorbehalten.
