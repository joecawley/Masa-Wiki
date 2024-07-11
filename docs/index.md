---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "masa Wiki"
  text: "All masa's Mods<br>All In One Place"
  tagline: Here you can access mod pages, wiki documentation, source code and more...
  
features:
  - title: MaLiLib
    icon:
      src: /logos/malilib-white.svg
      width: '180'
    link: /
  - title: Litematica
    icon:
      src: /logos/litematica-white.svg
      width: '180'
    link: /litematica/
  - title: Tweakeroo
    icon:
      src: /logos/tweakeroo-white.svg
      width: '180'
    link: /
  - title: Mini HUD
    icon:
      src: /logos/minihud-white.svg
      width: '180'
    link: /
  - title: Item Scroller
    icon:
      src: /logos/itemscroller-white.svg
      width: '180'
    link: /
---

<div class="vid-container">
  <iframe class="responsive-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
</div>


<style>

.vid-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.items > .item.grid-4 {
    width: calc(100% / 5);
  }

body.home #VPContent > div > div.VPFeatures.VPHomeFeatures > div > div > div > a > article > h2 {
  font-size: 24px;
  color: white;
  margin: auto;
  padding-top: 20px;
  text-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
              rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

#VPContent > div > div.VPFeatures.VPHomeFeatures > div > div > div > a {
  border: 4px solid #3b3d45;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
              rgba(0, 0, 0, 0.23) 0px 6px 6px;
  overflow: hidden;
  transition: all .2s ease-in-out;
}

#VPContent > div > div.VPFeatures.VPHomeFeatures > div > div > div > a:hover  {
  transform: scale(1.1);
  cursor: pointer;
}

</style>
