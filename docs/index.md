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
    link: /malilib/
  - title: Litematica
    icon:
      src: /logos/litematica-white.svg
      width: '180'
    link: /litematica/
  - title: Tweakeroo
    icon:
      src: /logos/tweakeroo-white.svg
      width: '180'
    link: /tweakeroo/
  - title: Mini HUD
    icon:
      src: /logos/minihud-white.svg
      width: '180'
    link: /minihud/
  - title: Item Scroller
    icon:
      src: /logos/item-scroller-white.svg
      width: '180'
    link: /item-scroller/
---

<style>
  
body.home a.VPFeature img {
  margin: auto
}

body.home a.VPFeature h2.title {
  margin: auto;
  font-size: 2em;
  text-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
                rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

body.home a.VPFeature[href*="Masa-Wiki"] {
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
              rgba(0, 0, 0, 0.23) 0px 6px 6px;
  overflow: hidden;
  transition: all .2s ease-in-out;
  padding-bottom: 16px;
}

body.home a.VPFeature.link[href*="Masa-Wiki"]:hover {
  transform: scale(1.05);
  cursor: pointer;
  border-color: inherit;
}

body.home a.VPFeature.link[href*="malilib"] {
  border: 4px solid var(--vp-c-malilib-soft);
  color: var(--vp-c-malilib-base);
}

body.home a.VPFeature.link[href*="malilib"]:hover {
  border-color: var(--vp-c-malilib-dark);
}

body.home a.VPFeature.link[href*="litematica"] {
  border: 4px solid var(--vp-c-litematica-soft);
  color: var(--vp-c-litematica-base);
}

body.home a.VPFeature.link[href*="litematica"]:hover {
  border-color: var(--vp-c-litematica-dark);
}

body.home a.VPFeature.link[href*="tweakeroo"] {
  border: 4px solid var(--vp-c-tweakeroo-soft);
  color: var(--vp-c-tweakeroo-base);
}

body.home a.VPFeature.link[href*="tweakeroo"]:hover {
  border: 4px solid var(--vp-c-tweakeroo-dark);
}

body.home a.VPFeature.link[href*="minihud"] {
  border: 4px solid var(--vp-c-minihud-soft);
  color: var(--vp-c-minihud-base);
}

body.home a.VPFeature.link[href*="minihud"]:hover {
  border: 4px solid var(--vp-c-minihud-dark);
}

body.home a.VPFeature.link[href*="item-scroller"] {
  border: 4px solid var(--vp-c-itemscroller-soft);
  color: var(--vp-c-itemscroller-base);
}

body.home a.VPFeature.link[href*="iteam-scroller"]:hover {
  border: 4px solid var(--vp-c-itemscroller-dark);
}

</style>
