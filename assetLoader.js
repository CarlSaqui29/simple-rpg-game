function loadAssets() {
    loadSpriteAtlas('./assets/mainCharacter.png', {
        'idle-side': {x: 0, y: 0, width: 18, height: 24},
        'idle-down': {x: 0, y: 26, width: 18, height: 24},
        'idle-up': {x: 0, y: 48, width: 18, height: 24},
        'player-down': { x: 0, y: 26, width: 54, height: 24, sliceX: 3, sliceY: 1,
            anims: {'walk-down': { from: 0, to: 2, speed: 6 }},
        },
        'player-up': { x: 0, y: 48, width: 54, height: 24, sliceX: 3, sliceY: 1, 
            anims: {'walk-up': { from: 0, to: 2, speed: 6 }},
        },
        'player-side': { x: 0, y: 0, width: 54, height: 24, sliceX: 3, sliceY: 1,
            anims: {'walk': { from: 0, to: 2, speed: 6 }} 
        },
    })
    loadSpriteAtlas('./assets/characters2.png', {
        'npc': { x: 32, y: 98, width: 16, height: 16 },
        'cat-mon': { x: 0, y: 16, width: 32, height: 32 },
        'spider-mon': { x: 32, y: 16, width: 32, height: 32 },
        'centipede-mon': { x: 64, y: 16, width: 32, height: 32 },
        'grass-mon': { x: 0, y: 49, width: 32, height: 32 },
        'mushroom-mon': { x: 32, y: 49, width: 32, height: 32 },
        'mini-mons': { x: 0, y: 0, width: 128, height: 16, sliceX: 8, sliceY: 1,
            anims: { 'spider': 1, 'centipede': 2, 'grass': 3 }
        }
    })
    loadSpriteAtlas('./assets/profs.png', {
        'prof1': { x: 32, y: 98, width: 16, height: 24 },
        'prof-mons': { x: 0, y: 0, width: 144, height: 24, sliceX: 8, sliceY: 1,
            anims: { 'prof1': 1}
        }
    })
    loadSprite('battle-background', './assets/battleBackground.png')
    loadSpriteAtlas('./assets/tiles.png', {
        'tile': { x: 0, y: 0, width: 128, height: 128, sliceX: 8, sliceY: 8,
            anims: {
                'bigtree-pt1': 1,
                'bigtree-pt2': 2,
                'bigtree-pt3': 9,
                'bigtree-pt4': 10,
                'grass-m': 14,
                'grass-tl': 17,
                'grass-tm': 18,
                'grass-tr': 19,
                'grass-l': 25,
                'grass-r': 27,
                'grass-bl': 33,
                'grass-mb': 34,
                'grass-br': 35,
                'tree-t': 4,
                'tree-b': 12,
                'grass-water': 20,
                'sand-1': 6,
                'ground-l': 41,
                'ground-m': 42,
                'ground-r': 43,
                'rock-water': 60,
                'l-1': 49,
                'l-2': 50,
                'l-3': 51,

            }
        }
    })
    loadSpriteAtlas('./assets/tilespack.png', {
        'tile': { x: 0, y: 0, width: 128, height: 128, sliceX: 8, sliceY: 8,
            anims: {
                'bigtree-pt1': 1,
            }
        }
    })
}
