---
description: The Basics | Saving Schematics
---
# Saving Schematics

## Prerequisites

A rule of thumb for saving schematics is that you want to turn off any redstone crations before saving. This will prevent weird or unwanted block states such as extended piston heads or powered observers.

Different amounts of data are available when saving your schematic depending on whether you are playing singleplayer or multiplayer. This can affect what is included in your schematics when they are placed or pasted.  
  
For more information see the [`Singleplayer vs Multiplayer`](#singleplayer-vs-multiplayer) section.

## Saving Your Selection

Once you have made a selection, it's time to save that selection to a file.

* Open Litematica's Menu <kbd>M</kbd>
* Click <span class="menu-name">`Area Editor`</span>
* Click <span class="menu-name">`Save Schematic`</span>

<DocImg src="litematica/the-basics/saving-schematics/gui-area-editor.png" caption="Area Editor GUI"/>

* This will open up the Save Schematic menu.
* Name your schematic in the text field at the top of the page.

<DocImg src="litematica/the-basics/saving-schematics/gui-save-schematic.png" caption="Save Schematic GUI"/>

* Click <span class="menu-name">`Save Schematic`</span>

>[!NOTE]
>You can also press the default keybind to save a schematic: <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>S</kbd>  
>This keybind can be changed at [`Hotkeys >> Save Area As Schemtic To File`](../configuration/hotkeys.md)

## Saving Options

There are four checkboxes in the top right that you can select according to your needs:

* **Ignore Entities**  
  By default, litematica will save any entities that are within your selection box at the time of saving (not including block entities such as signs and banners). Enabling this checkbox will prevent any entities from being saved.
* **Save from schematic world**  
  The schematic by saving the contents of the selection from the "schematic world" instead of the vanilla world. This allows you to combine or edit schematics without having to paste them to a temporary creative world.
* **Visible Blocks Only**  
  Blocks that are fully surrounded on all sides by full opaque blocks will not get saved. This could be a useful option for, for example, saving the outer "shell" of a mountain without saving all of the blocks inside the mountain.
* **Support Blocks**  
  This option works in conjunction with the 'Visible Blocks Only' option. It will keep any blocks that may be supporting other blocks, even if those support blocks are not classed as "visible". For example: under repeaters, carpets and blocks affected by gravity such as sand and gravel.

## Directory Tree

The default schematic directory can be found in the following locations for each operating system.

::: code-group

```:no-line-numbers [Windows]
%appdata%\.minecraft\schematics
```

```:no-line-numbers [macOS]
~/Library/Application Support/minecraft/schematics
```

```:no-line-numbers [Linux]
~/.minecraft/schematics
```

:::

>[!NOTE]
>The paths above are based on the default game launcher. This may be different if you are using a custom client/launcher.

Litematica allows you to store your schematics in directories/folders. Useful for easy organisation of schematics.  

<DocImg src="litematica/the-basics/saving-schematics/directory-buttons.png" caption="Save Schematic GUI - Directory Buttons"/>

* **Root Directory**  
  Takes you to the root schematics directory where all your schematic files are stored.
* **Parent Directory**  
  Takes you back to the parent direcotry of the directory you are in.
* **Create Directory**  
  Create a new directory within the directory you are in.

## Singleplayer vs Multiplayer

### Singleplayer

Schematics saved in singleplayer will contain all the <Tooltip text="NBT" tooltip="Named Binary Tag" link="https://minecraft.fandom.com/wiki/NBT_format" /> data of entities and block entities, as well as <Tooltip text="Scheduled Block Ticks" tooltip="Scheduled Block Ticks" link="https://minecraft.wiki/w/Tick#Scheduled_tick" />

### Multiplayer

A multiplayer server, by default does not send the full <Tooltip text="NBT" tooltip="Named Binary Tag" link="https://minecraft.fandom.com/wiki/NBT_format" /> data of entities and block entities to the client, as the client usually doesn't need it. Sending this data all the time would be a a waste of network bandwidth and server resources.  
  
This is the reason that schematics saved from most servers will be "missing" some data (e.g inventories being empty, including villager trades).  
  
To allow the client to be sent this <Tooltip text="NBT" tooltip="Named Binary Tag" link="https://minecraft.fandom.com/wiki/NBT_format" /> data when on a multiplayer server, a mod will need to be installed on the server to allow for this functionality. There are a number of options available for mods that acomplish this:

* [Masa Gadget](https://github.com/plusls/MasaGadget/)
* [plusls carpet addition](https://github.com/plusls/plusls-carpet-addition/)

<style>
  .doc-image-caption {
    position: relative;
    top: -22px;
    font-family: 'Roboto Slab', sans-serif;
    font-style: italic;
    color: rgb(150,150,150);
    border-top: 1px solid var(--vp-c-gray-3);
    background-image: linear-gradient(rgba(0,0,0,0.1), transparent);
    display: flex;
    padding: 2px;
  }
</style>
