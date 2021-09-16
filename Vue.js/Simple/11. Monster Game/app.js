Vue.createApp({
    data() {
        return {
            moves: 0,
            game: 3,
            log: [],

            player: {
                health: 100,
                stats: {
                    max: 30,
                    min: 10
                }
            },

            monster: {
                health: 100,
                stats: {
                    max: 50,
                    min: 1
                }
            },
        }
    },

    computed: {
        monsterHealth() {
            return this.monster.health > 0 ? this.monster.health+"%" : "0%";
        },

        playerHealth() {
            return this.player.health > 0 ? this.player.health+"%" : "0%";
        },

        gamestatus() {
            return this.game == 1 ? "You win!" : "You lose!";
        }
    },

    watch: {
        monster: {
            handler(n, v) {
                if (this.monster.health <= 0 && this.game == 3) {
                    this.game = 1
                }
            },

            deep: true
        },

        player: {
            handler(n, v) {
                if (this.player.health <= 0 && this.game == 3) {
                    this.game = 2
                }
            },

            deep: true
        }
    },

    methods: {
        move(n) {
            const {max, min} = this.monster.stats;

            this.log.push(n);
            this.log.push({
                type: "damage",
                whomst: "monster",
                name: "attack"
            })

            this.player.health -= Math.random()*(max-min)+min;
            this.moves++;
        },

        attackMonster() {
            if (this.game != 3) return;

            const {max, min} = this.player.stats;
            this.monster.health -= Math.random()*(max-min)+min;

            this.move({
                type: "monster",
                whomst: "the player",
                name: "hit >:)"
            });
        },

        specialAttackMonster() {
            if (this.game != 3) return;

            let {max, min} = this.player.stats;
            
            max += max*0.5;
            min += min*0.5;

            this.monster.health -= Math.random()*(max-min)+min;
            this.move({
                type: "monster",
                whomst: "the player",
                name: "hit hard >:D"
            });
        },

        playerHeal() {
            if (this.game != 3) return;
            this.player.health += Math.random()*(10-1)+1;
            
            if (this.player.health > 100) {
                this.player.health = 100;
            }

            this.move({
                type: "heal",
                whomst: "player",
                name: "heathly"
            });
        },

        surrender() {
            if (this.game != 3) return;

            this.log.push({
                type: "player",
                whomst: "player",
                name: "give up"
            })
            
            this.game = 2;
        },

        restart() {
            this.game = 3;
            this.moves = 0;
            this.log.length = 0;

            this.player.health = 100;
            this.monster.health = 100;
        }
    }
}).mount("#game")