import{_ as l,D as n,c as s,j as e,a,I as o,a3 as i,o as r}from"./chunks/framework.j91m0iWH.js";const M=JSON.parse('{"title":"Generic","description":"","frontmatter":{"prev":false,"next":{"text":"Info Overlays","link":"/litematica/configuration/info-overlays"}},"headers":[],"relativePath":"litematica/configuration/generic.md","filePath":"litematica/configuration/generic.md"}'),c={name:"litematica/configuration/generic.md"},d=e("h1",{id:"generic",tabindex:"-1"},[a("Generic "),e("a",{class:"header-anchor",href:"#generic","aria-label":'Permalink to "Generic"'},"​")],-1),h={id:"area-selections-per-world",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#area-selections-per-world","aria-label":'Permalink to "Area Selections Per World <Badge type="tip" text="1.12+" />"'},"​",-1),u=i('<p>Use per-world or per-server save directories for the area selections (in the &amp;eArea Browser&amp;r). If disabled, then the same &#39;global&#39; save directory is used for all worlds.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Don&#39;t switch this OFF while you are live streaming. This will cause the &amp;eArea Browser&amp;r to show the server IP in the navigation widget and also in the current selection name/path until you change the current directory and selection again.</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Type: <code>Boolean</code><br> Default Value: <code>true</code><br> Allowed Options: <code>true | false</code></p></div>',3),p={id:"change-selected-corner-on-move",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#change-selected-corner-on-move","aria-label":'Permalink to "Change Selected Corner On Move <Badge type="tip" text="1.12+" />"'},"​",-1),k=i('<p>If enabled, then the &#39;element selection&#39; of an area selection is always set to the last moved corner, when using the set corner hotkeys <code>Hotkeys &gt;&gt; Set Selection Box Corner 1 &amp; 2</code>.</p><p>The selected element is what the tool item and some hotkeys will control/move. This is basically the same as using the <code>Tool Select Elements</code> key <kbd>Middle Mouse</kbd> with the tool on the moved corner to select it.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Type: <code>Boolean</code><br> Default Value: <code>true</code><br> Allowed Options: <code>true | false</code></p></div>',3),f={id:"clone-at-original-position",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#clone-at-original-position","aria-label":'Permalink to "Clone At Original Position <Badge type="tip" text="1.12 +" />"'},"​",-1),y=i('<p>If enabled, then using the <code>Clone Selection</code> hotkey will create the placement at the original area selection&#39;s position, instead of at the player&#39;s current position.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Type: <code>Boolean</code><br> Default Value: <code>false</code><br> Allowed Options: <code>true | false</code></p></div>',2),P={id:"command-disable-feedback",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#command-disable-feedback","aria-label":'Permalink to "Command Disable Feedback <Badge type="tip" text="1.13+" />"'},"​",-1),q=e("p",null,"If enabled, then command feedback is automatically disabled and then re-enabled for multiplayer Paste, Fill and Delete operations (which are using /setblock and /fill commands) by disabling and then re-enabling the sendCommandFeedback game rule when the task is finished.",-1),v=e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},"INFO"),e("p",null,[a("Type: "),e("code",null,"Boolean"),e("br"),a(" Default Value: "),e("code",null,"true"),e("br"),a(" Allowed Options: "),e("code",null,"true | false")])],-1),_={id:"command-fill-no-chunk-clamp",tabindex:"-1"},w=e("a",{class:"header-anchor",href:"#command-fill-no-chunk-clamp","aria-label":'Permalink to "Command Fill No Chunk Clamp <Badge type="tip" text="1.13+" />"'},"​",-1),C=e("p",null,"Disables dividing the fill volumes (in the Fill, Replace and Delete modes) to per-chunk boxes.",-1),T=e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},"INFO"),e("p",null,[a("Type: "),e("code",null,"Boolean"),e("br"),a(" Default Value: "),e("code",null,"false"),e("br"),a(" Allowed Options: "),e("code",null,"true | false")])],-1),I={id:"command-use-world-edit",tabindex:"-1"},E=e("a",{class:"header-anchor",href:"#command-use-world-edit","aria-label":'Permalink to "Command Use World Edit <Badge type="tip" text="1.13+" />"'},"​",-1),S=i('<p>If enabled, instead of using the configured setblock and fill commands, the World Edit <code>//pos1</code>, <code>//pos2</code> and <code>//set</code> commands are used.</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>Using World Edit commands is around 3x slower than using vanilla commands due to the command limit per tick, and World Edit requiring multiple commands per block or area (//pos1 //pos2 //set).</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The paste replace behavior option WILL NOT WORK if using the World Edit commands and fill volumes instead of individual setblock commands!<br> Thus it is recommended to use the vanilla commands if you have the permission to run them.</p></div><p>One other thing that might make you prefer WE commands in some cases is that they can prevent block updates, if the server doesn&#39;t have the Carpet mod and thus the &#39;/carpet fillUpdates false&#39; rule available.</p><h2 id="custom-schematic-base-directory-enabled" tabindex="-1">Custom Schematic Base Directory Enabled <a class="header-anchor" href="#custom-schematic-base-directory-enabled" aria-label="Permalink to &quot;Custom Schematic Base Directory Enabled&quot;">​</a></h2><p>Allows using a custom schematic directory location. This for example allows you to use the same schematic directory for several different Minecraft instances.</p><p>Normally the main schematic directory is at &amp;a&#39;.minecraft/schematics/&#39;&amp;r, but this allows you to select another location for it, for example in your Dropbox/Google Drive folder or just some other common location anywhere on your system.</p><h2 id="debug-logging" tabindex="-1">Debug Logging <a class="header-anchor" href="#debug-logging" aria-label="Permalink to &quot;Debug Logging&quot;">​</a></h2><p>Enables some debug messages in the game console</p><h2 id="datafixer-default-schema" tabindex="-1">Datafixer Default Schema <a class="header-anchor" href="#datafixer-default-schema" aria-label="Permalink to &quot;Datafixer Default Schema&quot;">​</a></h2><p>Default Schema Value for the Vanilla Data Fixer</p><p>Used to adjust the lowest possible value, and the value used when the loaded schematic does not contain this information.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This setting is meant to be used at the direction from a Litematica developer such as masa themselves. When in doubt, keep the default for Minecraft 1.12.</p></div><h2 id="easy-place-first" tabindex="-1">Easy Place First <a class="header-anchor" href="#easy-place-first" aria-label="Permalink to &quot;Easy Place First&quot;">​</a></h2><p>This causes the Easy Place mode to place the first/closest block you are looking at first, instead of the furthest/bottom-most block. Setting this to false allows you to place multiple layers at once, since the furthest blocks would be placed before the closer ones block the line of sight.</p><h2 id="easy-place-hold-enabled" tabindex="-1">Easy Place Hold Enabled <a class="header-anchor" href="#easy-place-hold-enabled" aria-label="Permalink to &quot;Easy Place Hold Enabled&quot;">​</a></h2><p>Allows you to just hold down the use key (right click) and look at different schematic blocks to place them, when using the <code>Easy Place</code> mode. Without this option you need to separately click on each block.</p><h2 id="easy-place-mode" tabindex="-1">Easy Place Mode <a class="header-anchor" href="#easy-place-mode" aria-label="Permalink to &quot;Easy Place Mode&quot;">​</a></h2><p>Enables the <code>Easy Place</code> mode, which allows you to simply right click on the schematic blocks to place them.</p><div class="info custom-block"><p class="custom-block-title">NOTE</p><p>If you want to just hold down right click and walk around, then also enable the <code>Easy Place Hold</code> option.</p></div><h2 id="easy-place-single-player-handling" tabindex="-1">Easy Place Single Player Handling <a class="header-anchor" href="#easy-place-single-player-handling" aria-label="Permalink to &quot;Easy Place Single Player Handling&quot;">​</a></h2><p>If enabled, then Litematica handles the so called <code>Carpet Mod Accurate Block Placement Protocol</code> itself in single player. This is recommended to be kept enabled if you are going to use Easy Place in single player.</p><h2 id="easy-place-protocol-version" tabindex="-1">Easy Place Protocol Version <a class="header-anchor" href="#easy-place-protocol-version" aria-label="Permalink to &quot;Easy Place Protocol Version&quot;">​</a></h2><p>The type of <code>accurate placement protocol</code> to use.</p><ul><li><strong>Auto</strong><br> Uses v3 in single player, and by default Slabs-only in multiplayer, unless the server has Carpet mod that sends a <code>carpet:hello</code> packet, in which case v2 is used on that server.</li><li><strong>Version 3</strong><br> Only supported by Litematica itself (in single player) for now.</li><li><strong>Version 2</strong><br> Compatible with servers with the Carpet mod (either QuickCarpet by skyrising and DeadlyMC, or CarpetExtra in addition to FabricCarpet. And in both cases the <code>accurateBlockPlacement</code> Carpet rule needs to be enabled on the server).</li><li><strong>Slabs only</strong><br> Only fixes top slabs. Compatible with Paper servers.</li><li><strong>None</strong><br> Does not modify coordinates.</li></ul><h2 id="easy-place-vanilla-reach" tabindex="-1">Easy Place Vanilla Reach <a class="header-anchor" href="#easy-place-vanilla-reach" aria-label="Permalink to &quot;Easy Place Vanilla Reach&quot;">​</a></h2><p>If enabled, reduces reach distance from 6 to 4.5 so servers don&#39;t reject placement of far blocks.</p><h2 id="execute-require-holding-tool" tabindex="-1">Execute Require Holding Tool <a class="header-anchor" href="#execute-require-holding-tool" aria-label="Permalink to &quot;Execute Require Holding Tool&quot;">​</a></h2><p>Require holding an enabled tool item for the <code>Execute Operation</code> hotkey to work.</p><p>See <code>Hotkeys &gt;&gt; Execute Operation</code> for more info.</p><h2 id="fix-chest-mirror" tabindex="-1">Fix Chest Mirror <a class="header-anchor" href="#fix-chest-mirror" aria-label="Permalink to &quot;Fix Chest Mirror&quot;">​</a></h2><p>Enable a fix to the broken chest mirror code in vanilla.</p><h2 id="fix-rail-rotation" tabindex="-1">Fix Rail Rotation <a class="header-anchor" href="#fix-rail-rotation" aria-label="Permalink to &quot;Fix Rail Rotation&quot;">​</a></h2><p>Applies a fix for the vanilla bug in the rail rotation method, where the 180 degree rotations of straight north-south and east-west rails rotate 90 degrees counter-clockwise instead.</p><h2 id="generate-lowercase-names" tabindex="-1">Generate Lowercase Names <a class="header-anchor" href="#generate-lowercase-names" aria-label="Permalink to &quot;Generate Lowercase Names&quot;">​</a></h2><p>If enabled, then by default the suggested schematic file names in the name text field of the save schematic screen will be lowercased and use underscores in place of spaces or other &quot;special&quot; characters.</p><h2 id="highlight-block-in-inventory" tabindex="-1">Highlight Block In Inventory <a class="header-anchor" href="#highlight-block-in-inventory" aria-label="Permalink to &quot;Highlight Block In Inventory&quot;">​</a></h2><p>When enabled, highlights the item (including Shulker Boxes containing it) of the looked at block in the schematic.</p><h2 id="item-use-packet-check-bypass" tabindex="-1">Item Use Packet Check Bypass <a class="header-anchor" href="#item-use-packet-check-bypass" aria-label="Permalink to &quot;Item Use Packet Check Bypass&quot;">​</a></h2><p>Bypass the new distance/coordinate check that was added in 1.18.2.</p><p>That check breaks the <code>accurate placement protocol</code> and causes any blocks placed with a rotation (or other property) request to just become ghost blocks.</p><p>There is basically no need to ever disable this. The check didn&#39;t even exist ever before 1.18.2.&quot;</p><h2 id="layer-mode-follows-player" tabindex="-1">Layer Mode Follows Player <a class="header-anchor" href="#layer-mode-follows-player" aria-label="Permalink to &quot;Layer Mode Follows Player&quot;">​</a></h2><h2 id="material-list-ignore-state" tabindex="-1">Material List Ignore State <a class="header-anchor" href="#material-list-ignore-state" aria-label="Permalink to &quot;Material List Ignore State&quot;">​</a></h2><h2 id="paste-always-use-fill" tabindex="-1">Paste Always Use Fill <a class="header-anchor" href="#paste-always-use-fill" aria-label="Permalink to &quot;Paste Always Use Fill&quot;">​</a></h2><h2 id="paste-ignore-block-entities-entirely" tabindex="-1">Paste Ignore Block Entities Entirely <a class="header-anchor" href="#paste-ignore-block-entities-entirely" aria-label="Permalink to &quot;Paste Ignore Block Entities Entirely&quot;">​</a></h2><h2 id="paste-ignore-block-entities-from-fill" tabindex="-1">Paste Ignore Block Entities From Fill <a class="header-anchor" href="#paste-ignore-block-entities-from-fill" aria-label="Permalink to &quot;Paste Ignore Block Entities From Fill&quot;">​</a></h2><h2 id="paste-ignore-command-limit-with-nbt-restore" tabindex="-1">Paste Ignore Command Limit With NBT Restore <a class="header-anchor" href="#paste-ignore-command-limit-with-nbt-restore" aria-label="Permalink to &quot;Paste Ignore Command Limit With NBT Restore&quot;">​</a></h2><h2 id="paste-ignore-entities" tabindex="-1">Paste Ignore Entities <a class="header-anchor" href="#paste-ignore-entities" aria-label="Permalink to &quot;Paste Ignore Entities&quot;">​</a></h2><h2 id="paste-ignore-inventories" tabindex="-1">Paste Ignore Inventories <a class="header-anchor" href="#paste-ignore-inventories" aria-label="Permalink to &quot;Paste Ignore Inventories&quot;">​</a></h2><h2 id="paste-nbt-restore-behavior" tabindex="-1">Paste NBT Restore Behavior <a class="header-anchor" href="#paste-nbt-restore-behavior" aria-label="Permalink to &quot;Paste NBT Restore Behavior&quot;">​</a></h2><h2 id="paste-to-mc-function-files" tabindex="-1">Paste To MC Function Files <a class="header-anchor" href="#paste-to-mc-function-files" aria-label="Permalink to &quot;Paste To MC Function Files&quot;">​</a></h2><h2 id="paste-use-fill-command" tabindex="-1">Paste Use Fill Command <a class="header-anchor" href="#paste-use-fill-command" aria-label="Permalink to &quot;Paste Use Fill Command&quot;">​</a></h2><h2 id="paste-using-commands-in-sp" tabindex="-1">Paste Using Commands In SP <a class="header-anchor" href="#paste-using-commands-in-sp" aria-label="Permalink to &quot;Paste Using Commands In SP&quot;">​</a></h2><h2 id="pick-block-avoid-damageable" tabindex="-1">Pick Block Avoid Damageable <a class="header-anchor" href="#pick-block-avoid-damageable" aria-label="Permalink to &quot;Pick Block Avoid Damageable&quot;">​</a></h2><h2 id="pick-block-avoid-tools" tabindex="-1">Pick Block Avoid Tools <a class="header-anchor" href="#pick-block-avoid-tools" aria-label="Permalink to &quot;Pick Block Avoid Tools&quot;">​</a></h2><h2 id="pick-block-enabled" tabindex="-1">Pick Block Enabled <a class="header-anchor" href="#pick-block-enabled" aria-label="Permalink to &quot;Pick Block Enabled&quot;">​</a></h2><h2 id="pick-block-shulkers" tabindex="-1">Pick Block Shulkers <a class="header-anchor" href="#pick-block-shulkers" aria-label="Permalink to &quot;Pick Block Shulkers&quot;">​</a></h2><h2 id="placement-restriction" tabindex="-1">Placement Restriction <a class="header-anchor" href="#placement-restriction" aria-label="Permalink to &quot;Placement Restriction&quot;">​</a></h2><h2 id="placement-restriction-warn" tabindex="-1">Placement Restriction Warn <a class="header-anchor" href="#placement-restriction-warn" aria-label="Permalink to &quot;Placement Restriction Warn&quot;">​</a></h2><h2 id="render-material-list-in-guis" tabindex="-1">Render Material List In GUIs <a class="header-anchor" href="#render-material-list-in-guis" aria-label="Permalink to &quot;Render Material List In GUIs&quot;">​</a></h2><h2 id="render-thread-no-timeout" tabindex="-1">Render Thread No Timeout <a class="header-anchor" href="#render-thread-no-timeout" aria-label="Permalink to &quot;Render Thread No Timeout&quot;">​</a></h2><h2 id="sign-text-paste" tabindex="-1">Sign Text Paste <a class="header-anchor" href="#sign-text-paste" aria-label="Permalink to &quot;Sign Text Paste&quot;">​</a></h2><h2 id="tool-item-enabled" tabindex="-1">Tool Item Enabled <a class="header-anchor" href="#tool-item-enabled" aria-label="Permalink to &quot;Tool Item Enabled&quot;">​</a></h2><h2 id="unhide-schematic-vcs" tabindex="-1">Unhide Schematic VCS <a class="header-anchor" href="#unhide-schematic-vcs" aria-label="Permalink to &quot;Unhide Schematic VCS&quot;">​</a></h2><h2 id="paste-replace-behavior" tabindex="-1">Paste Replace Behavior <a class="header-anchor" href="#paste-replace-behavior" aria-label="Permalink to &quot;Paste Replace Behavior&quot;">​</a></h2><h2 id="selection-corners-mode" tabindex="-1">Selection Corners Mode <a class="header-anchor" href="#selection-corners-mode" aria-label="Permalink to &quot;Selection Corners Mode&quot;">​</a></h2><h2 id="command-fill-max-volume" tabindex="-1">Command Fill Max Volume <a class="header-anchor" href="#command-fill-max-volume" aria-label="Permalink to &quot;Command Fill Max Volume&quot;">​</a></h2><h2 id="command-limit-per-tick" tabindex="-1">Command Limit Per Tick <a class="header-anchor" href="#command-limit-per-tick" aria-label="Permalink to &quot;Command Limit Per Tick&quot;">​</a></h2><h2 id="command-name-clone" tabindex="-1">Command Name Clone <a class="header-anchor" href="#command-name-clone" aria-label="Permalink to &quot;Command Name Clone&quot;">​</a></h2><h2 id="command-name-fill" tabindex="-1">Command Name Fill <a class="header-anchor" href="#command-name-fill" aria-label="Permalink to &quot;Command Name Fill&quot;">​</a></h2><h2 id="command-name-setblock" tabindex="-1">Command Name Setblock <a class="header-anchor" href="#command-name-setblock" aria-label="Permalink to &quot;Command Name Setblock&quot;">​</a></h2><h2 id="command-name-summon" tabindex="-1">Command Name Summon <a class="header-anchor" href="#command-name-summon" aria-label="Permalink to &quot;Command Name Summon&quot;">​</a></h2><h2 id="command-task-interval" tabindex="-1">Command Task Interval <a class="header-anchor" href="#command-task-interval" aria-label="Permalink to &quot;Command Task Interval&quot;">​</a></h2><h2 id="custom-schematic-base-directory" tabindex="-1">Custom Schematic Base Directory <a class="header-anchor" href="#custom-schematic-base-directory" aria-label="Permalink to &quot;Custom Schematic Base Directory&quot;">​</a></h2><h2 id="easy-place-swap-interval" tabindex="-1">Easy Place Swap Interval <a class="header-anchor" href="#easy-place-swap-interval" aria-label="Permalink to &quot;Easy Place Swap Interval&quot;">​</a></h2><h2 id="pick-blockable-slots" tabindex="-1">Pick Blockable Slots <a class="header-anchor" href="#pick-blockable-slots" aria-label="Permalink to &quot;Pick Blockable Slots&quot;">​</a></h2><h2 id="tool-item" tabindex="-1">Tool Item <a class="header-anchor" href="#tool-item" aria-label="Permalink to &quot;Tool Item&quot;">​</a></h2>',78);function B(N,F,A,D,R,V){const t=n("Badge");return r(),s("div",null,[d,e("h2",h,[a("Area Selections Per World "),o(t,{type:"tip",text:"1.12+"}),a(),m]),u,e("h2",p,[a("Change Selected Corner On Move "),o(t,{type:"tip",text:"1.12+"}),a(),b]),k,e("h2",f,[a("Clone At Original Position "),o(t,{type:"tip",text:"1.12 +"}),a(),g]),y,e("h2",P,[a("Command Disable Feedback "),o(t,{type:"tip",text:"1.13+"}),a(),x]),q,v,e("h2",_,[a("Command Fill No Chunk Clamp "),o(t,{type:"tip",text:"1.13+"}),a(),w]),C,T,e("h2",I,[a("Command Use World Edit "),o(t,{type:"tip",text:"1.13+"}),a(),E]),S])}const W=l(c,[["render",B]]);export{M as __pageData,W as default};
