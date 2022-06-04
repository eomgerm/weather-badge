<div align="center">
<h2>Weather Badge</h2>
<h4><em>Create your own Badge showing current weather!</em></h4>

[![Weather Badge](https://weather-badge.vercel.app/api/badge?lat=37.5666791&lon=126.9782914&size=180)]("https://weather-badge.vercel.app/")

<a href="https://weather-badge.vercel.app/">
🏃 Go to Website</a>
</a>
</div>

## ✔️ Contents

- [Contents](#✔️-contents)
- [About](#💁-about)
- [Usage](#📝-usage)
  - [SVG URL](#svg-url)
  - [HTML](#html)
  - [Markdown](#markdown)
  - [Or](#or)
- [Built With](#built-with)
  - [Web](#web)
  - [SVG](#svg)
  - [Server](#server)
  - [Deploy](#deploy)

## 💁 About

실시간으로 최근 날씨를 보여주는 SVG입니다!  
_깃허브, 노션, 웹페이지_ 등에 추가해서 예쁘게 꾸며보세요.

SVG shows the recent weather in real time!  
Add this to your _Github profile_, _Notion_ or _Website_ for decorations.

## 📝 Usage

### SVG URL

```
https://weather-badge.vercel.app/api/badge?lat={latitude}&lon={longitude}&size={size}
```

### HTML

```
<a href="https://weather-badge.vercel.app/">
   <img src="https://weather-badge.vercel.app/api/badge?lat={latitude}&lon={longitude}&size={size}" />
</a>
```

### Markdown

```
[![Weather Badge](https://weather-badge.vercel.app/api/badge?lat={latitude}&lon={longitude}&size={size})]("https://weather-badge.vercel.app/")
```

⚠️ **lat, lon is required, size is optional (default: 150)**

### Or

You can easily create badge via <a href="https://weather-badge.vercel.app/">my site</a>!

## Built with

### Web

- Next.js
- Tailwind CSS
- FontAwesome

### SVG

- FontAwesome
- <a href="https://bas.dev/work/meteocons"> Meteocons </a>

### Server

- Next.js

### Deploy

- Vercel
