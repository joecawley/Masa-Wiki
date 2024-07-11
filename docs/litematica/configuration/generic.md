---
prev: false
next:
    text: 'Info Overlays'
    link: '/litematica/configuration/info-overlays'
---

# Generic

## Area Selections Per World <Badge type="tip" text="1.12+" />

Use per-world or per-server save directories for the area selections (in the &eArea Browser&r). If disabled, then the same 'global' save directory is used for all worlds.

::: warning
Don't switch this OFF while you are live streaming. This will cause the &eArea Browser&r to show the server IP in the navigation widget and also in the current selection name/path until you change the current directory and selection again.
:::

::: info
Type: `Boolean`  
Default Value: `true`  
Allowed Options: `true | false`
:::

## Change Selected Corner On Move <Badge type="tip" text="1.12+" />

If enabled, then the 'element selection' of an area selection is always set to the last moved corner, when using the set corner hotkeys `Hotkeys >> Set Selection Box Corner 1 & 2`.

The selected element is what the tool item and some hotkeys will control/move. This is basically the same as using the `Tool Select Elements` key <kbd>Middle Mouse</kbd> with the tool on the moved corner to select it.

::: info
Type: `Boolean`  
Default Value: `true`  
Allowed Options: `true | false`
:::

## Clone At Original Position <Badge type="tip" text="1.12 +" />

If enabled, then using the `Clone Selection` hotkey will create the placement at the original area selection's position, instead of at the player's current position.

::: info
Type: `Boolean`  
Default Value: `false`  
Allowed Options: `true | false`
:::

## Command Disable Feedback <Badge type="tip" text="1.13+" />

If enabled, then command feedback is automatically disabled and then re-enabled for multiplayer Paste, Fill and Delete operations (which are using /setblock and /fill commands) by disabling and then re-enabling the sendCommandFeedback game rule when the task is finished.

::: info
Type: `Boolean`  
Default Value: `true`  
Allowed Options: `true | false`
:::

## Command Fill No Chunk Clamp <Badge type="tip" text="1.13+" />

Disables dividing the fill volumes (in the Fill, Replace and Delete modes) to per-chunk boxes.

::: info
Type: `Boolean`  
Default Value: `false`  
Allowed Options: `true | false`
:::

## Command Use World Edit <Badge type="tip" text="1.13+" />

If enabled, instead of using the configured setblock and fill commands, the World Edit `//pos1`, `//pos2` and `//set` commands are used.

::: tip NOTE
Using World Edit commands is around 3x slower than using vanilla commands due to the command limit per tick, and World Edit requiring multiple commands per block or area (//pos1 //pos2 //set).
:::

::: warning
The paste replace behavior option WILL NOT WORK if using the World Edit commands and fill volumes instead of individual setblock commands!  
Thus it is recommended to use the vanilla commands if you have the permission to run them.
:::
One other thing that might make you prefer WE commands in some cases is that they can prevent block updates, if the server doesn't have the Carpet mod and thus the '/carpet fillUpdates false' rule available.


## Custom Schematic Base Directory Enabled

Allows using a custom schematic directory location. This for example allows you to use the same schematic directory for several different Minecraft instances.

Normally the main schematic directory is at &a'.minecraft/schematics/'&r, but this allows you to select another location for it, for example in your Dropbox/Google Drive folder or just some other common location anywhere on your system.

## Debug Logging

Enables some debug messages in the game console

## Datafixer Default Schema

Default Schema Value for the Vanilla Data Fixer  
  
Used to adjust the lowest possible value, and the value used
when the loaded schematic does not contain this information.

::: warning
This setting is meant to be used at the direction from a Litematica developer such as masa themselves. When in doubt, keep the default for Minecraft 1.12.
:::

## Easy Place First

This causes the Easy Place mode to place the first/closest block you are looking at first, instead of the furthest/bottom-most block. Setting this to false allows you to place multiple layers at once, since the furthest blocks would be placed before the closer ones block the line of sight.

## Easy Place Hold Enabled

Allows you to just hold down the use key (right click) and look at different schematic blocks to place them, when using the `Easy Place` mode. Without this option you need to separately click on each block.

## Easy Place Mode

Enables the `Easy Place` mode, which allows you to simply right click on the schematic blocks to place them.

::: info NOTE
If you want to just hold down right click and walk around, then also enable the `Easy Place Hold` option.
:::

## Easy Place Single Player Handling

If enabled, then Litematica handles the so called `Carpet Mod Accurate Block Placement Protocol` itself in single player. This is recommended to be kept enabled if you are going to use Easy Place in single player.

## Easy Place Protocol Version

The type of `accurate placement protocol` to use.
* **Auto**   
Uses v3 in single player, and by default Slabs-only in multiplayer, unless the server has Carpet mod that sends a `carpet:hello` packet, in which case v2 is used on that server.
* **Version 3**  
Only supported by Litematica itself (in single player) for now.
* **Version 2**  
Compatible with servers with the Carpet mod (either QuickCarpet by skyrising and DeadlyMC, or CarpetExtra in addition to FabricCarpet. And in both cases the `accurateBlockPlacement` Carpet rule needs to be enabled on the server).
* **Slabs only**   
Only fixes top slabs. Compatible with Paper servers.
* **None**  
Does not modify coordinates.

## Easy Place Vanilla Reach

If enabled, reduces reach distance from 6 to 4.5 so servers don't reject placement of far blocks.

## Execute Require Holding Tool

Require holding an enabled tool item for the `Execute Operation` hotkey to work.

See `Hotkeys >> Execute Operation` for more info.

## Fix Chest Mirror

Enable a fix to the broken chest mirror code in vanilla.

## Fix Rail Rotation

Applies a fix for the vanilla bug in the rail rotation method, where the 180 degree rotations of straight north-south and east-west rails rotate 90 degrees counter-clockwise instead.

## Generate Lowercase Names

If enabled, then by default the suggested schematic file names in the name text field of the save schematic screen will be lowercased and use underscores in place of spaces or other "special" characters.

## Highlight Block In Inventory

When enabled, highlights the item (including Shulker Boxes containing it) of the looked at block in the schematic.

## Item Use Packet Check Bypass

Bypass the new distance/coordinate check that was added in 1.18.2.  
  
That check breaks the `accurate placement protocol` and causes any blocks placed with a rotation (or other property) request to just become ghost blocks.  
  
There is basically no need to ever disable this. The check didn't even exist ever before 1.18.2."

## Layer Mode Follows Player
## Material List Ignore State
## Paste Always Use Fill
## Paste Ignore Block Entities Entirely
## Paste Ignore Block Entities From Fill
## Paste Ignore Command Limit With NBT Restore
## Paste Ignore Entities
## Paste Ignore Inventories
## Paste NBT Restore Behavior
## Paste To MC Function Files
## Paste Use Fill Command
## Paste Using Commands In SP
## Pick Block Avoid Damageable
## Pick Block Avoid Tools
## Pick Block Enabled
## Pick Block Shulkers
## Placement Restriction
## Placement Restriction Warn
## Render Material List In GUIs
## Render Thread No Timeout
## Sign Text Paste
## Tool Item Enabled
## Unhide Schematic VCS
## Paste Replace Behavior
## Selection Corners Mode
## Command Fill Max Volume
## Command Limit Per Tick
## Command Name Clone
## Command Name Fill
## Command Name Setblock
## Command Name Summon
## Command Task Interval
## Custom Schematic Base Directory
## Easy Place Swap Interval
## Pick Blockable Slots
## Tool Item