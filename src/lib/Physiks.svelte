<script>
    import Matter from 'matter-js';
    import { onMount } from 'svelte';

    let w;
    let h;
        
    onMount(() => {
        createScene(w, h);
    });
        
    function createScene(w, h) {
     // module aliases
     var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Composite = Matter.Composite,
        Bodies = Matter.Bodies;
        
    // create an engine
    var engine = Engine.create();
    var world = engine.world;
        
    // create a renderer
    var render = Render.create({
        element: document.getElementById("matter-js"),
        engine: engine,
        options: {
            width: w,
            height: h,
            pixelRatio: 1,
            background: 'rgba(0, 0, 0, 0)',
            hasBounds: false,
            enabled: true,
            wireframes: false,
            showSleeping: true,
        }
    });
        
    // run the renderer
    Render.run(render);
        
    // create runner
    var runner = Runner.create();
        
    // run the engine
    Runner.run(runner, engine);
        
    // add bodies
    var offset = 10,
        options = { 
            isStatic: true,
            render: {
                visible: false
            }
        };

    world.bodies = [];

    // these static walls will not be rendered in this sprites example, see options
    Composite.add(world, [
        //Bodies.rectangle(w/2, -offset, w + 2 * offset, 50.5, options),
        Bodies.rectangle(w/2, h + offset, w + 2 * offset, 50.5, options),
        Bodies.rectangle(w + offset, h/2, 50.5, h + 2 * offset, options),
        Bodies.rectangle(-offset, h/2, 50.5, h + 2 * offset, options)
    ]);

    var stack = Composites.stack(w/4, -1000, 15, 20, 7 + Common.random(-1, 1) * 20, 7 + Common.random(-1, 1) * 20, function(x, y) {
        if (Common.random() > 0.35) {
            return Bodies.circle(x + Common.random(-1, 1) * 30, y + Common.random(-1, 1) * 30, 15 + Common.random() * 10, {
                // density: 0.001,
                // frictionAir: 0.01,
                // restitution: 0.6,
                // friction: 0.1,
                // frictionStatic: 0.2,
                render: {
                    sprite: {
                        texture: `./img/sprites/pop${Math.floor(Common.random() * 8)+1}.png`,
                        xScale: 0.25,
                        yScale: 0.25
                    }
                }
            });
        } else {
            return Bodies.rectangle(x + Common.random(-1, 1) * 20, y + Common.random(-1, 1) * 10, 40, 40, {
                // density: 0.001,
                // frictionAir: 0.01,
                // restitution: 0.6,
                // friction: 0.1,
                // frictionStatic: 0.2,
                render: {
                    sprite: {
                        texture: `./img/sprites/pop${Math.floor(Common.random() * 8)+1}.png`,
                        xScale: 0.25,
                        yScale: 0.25
                    }
                }
            });
        }
    });

    Composite.add(world, stack);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });
        
    Composite.add(world, mouseConstraint);
        
    // keep the mouse in sync with rendering
    render.mouse = mouse;
    }; 
    </script>
        
    <div class="flex justify-center measure" bind:clientWidth={w} bind:clientHeight={h}>
        <div id="matter-js" class="z-1"></div>
    </div>

    <style>
        .measure {
            width: 100%;
            height: 100%;
        }
    </style>