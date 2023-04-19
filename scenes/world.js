function setWorld(worldState) {
    function makeTile(type) {
        return [
            sprite('tile'),
            {type}
        ]
    }

    const map = [
        addLevel([
            '                 ',
            ' cdddddddddddde  ',
            ' 30000000000002  ',
            ' 30000000000002  ',    
            ' 30000000000002  ',
            ' 30030000008889  ',
            ' 30030000024445  ',
            ' 300a8888897777  ',
            ' 30064444457777  ',
            ' 30000000000002  ',
            ' 30000000000002  ',
            ' 30000000021111  ',
            ' 1111111111      ',
            '      b          ',
            '     b      b    ',
            ' b             b '
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => makeTile('grass-m'),
                '1': () => makeTile('grass-water'),
                '2': () => makeTile('grass-r'),
                '3': () => makeTile('grass-l'),
                '4': () => makeTile('ground-m'),
                '5': () => makeTile('ground-r'),
                '6': () => makeTile('ground-l'),
                '7': () => makeTile('sand-1'),
                '8': () => makeTile('grass-mb'),
                '9': () => makeTile('grass-br'),
                'a': () => makeTile('grass-bl'),
                'b': () => makeTile('rock-water'),
                'c': () => makeTile('grass-tl'),
                'd': () => makeTile('grass-tm'),
                'e': () => makeTile('grass-tr')
            }
        }),
        addLevel([
            '      12       ',
            '      34       ',
            ' 000    00  12 ',
            ' 00   00    34 ',
            ' 0    0        ',
            '      0  0     ',
            '           5   ',
            '           6   ',
            '     12     789',
            '     34  0     ',
            '               ',
            '               ',
            '               '
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => makeTile(),
                '1': () => makeTile('bigtree-pt1'),
                '2': () => makeTile('bigtree-pt2'),
                '3': () => makeTile('bigtree-pt3'),
                '4': () => makeTile('bigtree-pt4'),
                '5': () => makeTile('tree-t'),
                '6': () => makeTile('tree-b'),
                '7': () => makeTile('l-1'),
                '8': () => makeTile('l-2'),
                '9': () => makeTile('l-3')
            }
        }),
        addLevel([
            ' 00000000000000 ',
            '0     11       0',
            '0           11 0',
            '0           11 0',
            '0              0',
            '0   2          0',
            '0   2      0000',
            '0   0000000    0',
            '0    00        0',
            '0               ',
            '0               ',
            '0          0000 ',
            ' 0000000000     ',
            '                '
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => [
                    area({shape: new Rect(vec2(0), 16, 16)}),
                    body({isStatic: true})
                ],
                '1': () => [
                    area({
                        shape: new Rect(vec2(0), 8, 8),
                        offset: vec2(4, 4)
                    }),
                    body({isStatic: true})
                ],
                '2': () => [
                    area({shape: new Rect(vec2(0), 2, 16)}),
                    body({isStatic: true})
                ],
                '3': () => [
                    area({
                    shape: new Rect(vec2(0), 16, 20),
                    offset: vec2(0, -4)
                    }),
                    body({isStatic: true})
                ]
            }
        })
    ]

    for (const layer of map) {
        layer.use(scale(4))
        for (const tile of layer.children) {
            if (tile.type) {
                tile.play(tile.type)
            }
        }
    }

    add([sprite('prof-mons'), area(), body({isStatic: true}), pos(90,670), scale(4), 'Prof. Physics'])
    // add([sprite('prof-mons'), area(), body({isStatic: true}), pos(400,200), scale(4), 'Thesis Prof.'])
    // centipedeMon.play('centipede')

    const spiderMon = add([sprite('prof2'), area(), body({isStatic: true}), pos(400,200), scale(4), 'Thesis Prof.'])
    // spiderMon.play('prof2')
    // spiderMon.flipX = true

    // const centipedeMon = add([sprite('mini-mons'), area(), body({isStatic: true}), pos(100,200), scale(4), 'centipede'])
    // centipedeMon.play('centipede')

    // const grassMon = add([sprite('mini-mons'), area(), body({isStatic: true}), pos(900, 570), scale(4), 'grass'])
    // grassMon.play('grass')

    add([ sprite('npc'), scale(4), pos(600,700), area(), body({isStatic: true}), 'npc'])

    const player = add([
        sprite('idle-side'),
        pos(500,700),
        scale(4),
        area(),
        body(),
        {
            currentSprite: 'idle-side',
            speed: 300,
            isInDialogue: false
        },
    ])

    let tick = 0
    onUpdate(() => {
        camPos(player.pos)
        tick++
        if ((isKeyDown('down') || isKeyDown('up')) 
        && tick % 20 === 0 
        && !player.isInDialogue) {
            player.flipX = !player.flipX
        }
    })

    function setSprite(player, spriteName) {
        if (player.currentSprite !== spriteName) {
            player.use(sprite(spriteName))
            player.currentSprite = spriteName
        }
    }

    onKeyDown('down', () => {
        if (player.isInDialogue) return
        if (player.curAnim() !== 'walk-down') {
            setSprite(player, 'player-down')
            player.play('walk-down')
        }
        player.move(0, player.speed)
    })

    onKeyRelease('down', () => {
        setSprite(player, 'idle-down');
        player.stop();
    })

    onKeyDown('up', () => {
        if (player.isInDialogue) return
        if (player.curAnim() !== 'walk-up') {
            setSprite(player, 'player-up')
            player.play('walk-up')
        }
        player.move(0, -player.speed)
    })

    onKeyRelease('up', () => {
        setSprite(player, 'idle-up');
        player.stop();
    })

    onKeyDown('left', () => {
        if (player.isInDialogue) return
        player.flipX = false
        if (player.curAnim() !== 'walk') {
            setSprite(player, 'player-side')
            player.play('walk')
        }
        player.move(-player.speed, 0)

    })

    onKeyDown('right', () => {
        if (player.isInDialogue) return
        player.flipX = true;
        if (player.curAnim() !== 'walk') {
            setSprite(player, 'player-side')
            player.play('walk')
        }
        player.move(player.speed, 0)
    })


    onKeyRelease('left', () => {
        setSprite(player, 'idle-side');
        player.stop();
    })

    onKeyRelease('right', () => {
        setSprite(player, 'idle-side');
        player.flipX = true;
        player.stop()
    })

    if (!worldState) {
        worldState = {
            playerPos : player.pos,
            faintedMons: []
        }
    }

    player.pos = vec2(worldState.playerPos)
    for (const faintedMon of worldState.faintedMons) {
        destroy(get(faintedMon)[0])
    }

    player.onCollide('npc', () => {
        player.isInDialogue = true
        const dialogueBoxFixedContainer = add([fixed()])
        const dialogueBox = dialogueBoxFixedContainer.add([
            rect(1000, 200),
            outline(5),
            pos(150, 500),
            fixed()
        ])
        const dialogue = "Defeat all the Professor and pass their subject to graduate!"
        const content = dialogueBox.add([
            text('', 
            {
                size: 42,
                width: 900,
                lineSpacing: 15,
            }),
            color(10,10,10),
            pos(40,30),
            fixed()
        ])

        if (worldState.faintedMons < 4) {
            content.text = dialogue
        } else {
            content.text = "You're the champion!"
        }

        onUpdate(() => {
            if (isKeyDown('space')) {
                destroy(dialogueBox)
                player.isInDialogue = false
            }
        })
    })

    function flashScreen() {
        const flash = add([rect(1280, 720), color(10,10,10), fixed(), opacity(0)])
        tween(flash.opacity, 1, 0.5, (val) => flash.opacity = val, easings.easeInBounce)
    }

    function onCollideWithPlayer(enemyName, mon, player, worldState) {
        player.onCollide(enemyName, () => {
            flashScreen()
            setTimeout(() => {
                worldState.playerPos = player.pos
                worldState.enemyName = enemyName
                worldState.mon = mon
                go('battle', worldState) 
            }, 1000)
        })
    }



    onCollideWithPlayer('Prof. Physics', 'cat', player, worldState)
    onCollideWithPlayer('Thesis Prof.', 'spider', player, worldState)
    // onCollideWithPlayer('uo', 'spider', player, worldState)
    // onCollideWithPlayer('Thesis Prof.','centipede', player, worldState)
    // onCollideWithPlayer('sdsad', 'grass', player, worldState)
}