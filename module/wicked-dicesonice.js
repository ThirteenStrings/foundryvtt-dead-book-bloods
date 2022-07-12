
Hooks.on('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem({ id: "WhiteDots", name: "Wicked Dots"},"default");
   dice3d.addDicePreset({
	   type: "d6",
	   labels: [
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/whitedots/d6-1.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/whitedots/d6-2.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/whitedots/d6-3.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/whitedots/d6-4.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/whitedots/d6-5.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/whitedots/d6-6.webp"	   
	   ],
	   bumpMaps: [
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/whitedots/d6-1-b.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/whitedots/d6-2-b.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/whitedots/d6-3-b.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/whitedots/d6-4-b.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/whitedots/d6-5-b.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/whitedots/d6-6-b.webp"	  
		],
		system: "WhiteDots",
		colorset:"Wicked Dice"
   },"d6");

  dice3d.addSystem({ id: "BlackDots", name: "Wicked Dark Dots"},"default");
   dice3d.addDicePreset({
	   type: "d6",
	   labels: [
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/dots/d6-1.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/dots/d6-2.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/dots/d6-3.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/dots/d6-4.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/dots/d6-5.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/dots/d6-6.webp"	   
	   ],
	   bumpMaps: [
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/dots/d6-1-b.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/dots/d6-2-b.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/dots/d6-3-b.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/dots/d6-4-b.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/dots/d6-5-b.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/dots/d6-6-b.webp"	  
		],
		system: "BlackDots",
		colorset:"Wicked Dice"
   },"d6");

  dice3d.addSystem({ id: "Claws", name: "Wicked Claws"},"preferred");

   dice3d.addDicePreset({
	   type: "d6",
	   labels: [
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/claws/d6-1.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/claws/d6-2.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/claws/d6-3.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/claws/d6-4.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/claws/d6-5.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/claws/d6-6.webp"	   
	   ],
	   bumpMaps: [
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/claws/d6-1-b.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/claws/d6-2-b.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/claws/d6-3-b.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/claws/d6-4-b.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/claws/d6-5-b.webp",
       "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/claws/d6-6-b.webp"	  
		],
		system: "Claws",
		colorset:"Wicked Dice"
   },"d6");   

   dice3d.addSystem({ id: "Numbers", name: "Wicked Numbers"},"default");
   dice3d.addDicePreset({
	   type: "d6",
	   labels: [
       "1",
       "2",
       "3",
       "4",
       "5",
       "6"	   
	   ],
	   	system: "Numbers",
	   	colorset:"Wicked Dice"
   },"d6");  

      dice3d.addColorset({
        name: 'Wicked Dice',
        description: "Wicked Style",
        category: "Wicked Ones",
		foreground: "#750000",
		background: "#d1d1d1",
		outline: "#cc0000",
        edge: '#707070',
		material: 'metal',
		font:"Didot",
		texture: "../systems/foundryvtt-dead-book-bloods/styles/assets/dice/dots/texture.webp",
      },"preferred");
    });