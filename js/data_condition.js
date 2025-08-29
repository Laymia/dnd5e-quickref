data_condition = [
    {
        title: "Blinded",
        optional: "Standard rule",
        icon: "one-eyed",
        subtitle: "You can't see",
        description: "You can't see",
        reference: "PHB, pg. 290.",
        bullets: [
            "You automatically fail any ability check which requires sight.",
            "Attack rolls against you have Advantage, and your attack rolls have Disadvantage."
        ]
    },
    {
        title: "Charmed",
        optional: "Standard rule",
        icon: "smitten",
        subtitle: "You are charmed",
        description: "You are charmed by another creature",
        reference: "PHB, pg. 290.",
        bullets: [
            "You can't attack your charmer or target them with harmful abilities or magical effects.",
            "Your charmer has advantage on ability checks to interact socially with you."
        ]
    },
    {
        title: "Corrupted**",
        optional: "Homebrew rule",
        icon: "andromeda-chain",
        subtitle: "You are tainted by the Void",
        reference: "Void Exposure Mechanics",
        description: "Your body and soul are corrupted by void-matter.",
        bullets: [
           "You gain Void Points from exposure to void-matter, traps, or certain abilities.",
            "<b>1+ VP:</b> You hear whispers and gain Short-term Madness.",
            "<b>3+ VP:</b> Black veins appear. Advantage on CHA checks, Disadvantage on CHA saves.",
            "<b>5+ VP:</b> A chain brand glows. Vulnerable to radiant, resistant to necrotic. Cultists sense you.",
            "<b>7+ VP:</b> Your max HP is reduced by 25%.",
            "<b>10 VP:</b> You become a Void-Spawn under the DM's control."
]
},
    {
        title: "Deafened",
        optional: "Standard rule",
        icon: "elf-ear",
        subtitle: "You can't hear",
        description: "You can't hear",
        reference: "PHB, pg. 290.",
        bullets: [
            "You automatically fail any ability check which requires hearing."
        ]
    },
    {
        title: "Exhaustion",
        optional: "Standard rule",
        icon: "crawl",
        subtitle: "You are exhausted",
        description: "Exhaustion is measured in six levels",
        reference: "PHB, pg. 291.",
        bullets: [
            "This condition is cumulative. Each time you receive it, you gain 1 Exhaustion level. You die if your Exhaustion level is 6.",
            "When you make a d20 Test, the roll is reduced by 2 x your exhaustion level",
            "You speed is reduced by a number of feet equal to 5 x your exhaustion level.",
            "Finishing a long rest removes one level of exhaustion."
        ]
    },
    {
        title: "Frightened",
        optional: "Standard rule",
        icon: "sharp-smile",
        subtitle: "You are frightened",
        description: "You are frightened",
        reference: "PHB, pg. 290.",
        bullets: [
            "You have disadvantage on ability checks and attack rolls while the source of your fear is within line of sight.",
            "You can't willingly move closer to the source of your fear."
        ]
    },
    {
        title: "Grappled",
        optional: "Standard rule",
        icon: "grab",
        subtitle: "You are grappled",
        description: "You are grappled",
        reference: "PHB, pg. 290.",
        bullets: [
            "Your speed becomes 0, and can't increase",
            "You have Disadvantage on attack rolls against any target other than the grappler.",
            "The condition ends if your grappler is incapacitated.",
            "The condition also ends if you are removed from the reach of your grappler.",
            "The grappler can drag or carry you when it moves, but every foot of movement costs it 1 extra foot unless you are Tiny or two or more sizes smaller than it."
        ]
    },
    {
        title: "Incapacitated",
        optional: "Standard rule",
        icon: "internal-injury",
        subtitle: "You can't take actions or reactions",
        description: "You can't take actions or reactions",
        reference: "PHB, pg. 290.",
        bullets: [
            "You can’t take any action, Bonus Action, or Reaction.",
            "Your Concentration is broken.",
            "You can’t speak.",
            "<b>Surprised.</b> If you’re Incapacitated when you roll Initiative, you have Disadvantage on the roll. This counts as being surprised."

        ]
    },
    {
        title: "Invisible",
        optional: "Standard rule",
        icon: "invisible",
        subtitle: "You can't be seen",
        description: "You can't be seen without the aid of magic or a special sense",
        reference: "PHB, pg. 291.",
        bullets: [
            "<b>Surprise</b>. If you’re Invisible when you roll Initiative, you have Advantage on the roll.",
            "<b>Concealed</b>. You aren’t affected by any effect that requires its target to be seen unless the effect’s creator can somehow see you. Any equipment you are wearing or carrying is also concealed.",
            " Attack rolls against you have Disadvantage, and your attack rolls have Advantage. If a creature can somehow see you, you don’t gain this benefit against that creature."
        ]
    },
    {
        title: "Paralyzed",
        optional: "Standard rule",
        icon: "internal-injury",
        subtitle: "You are paralyzed",
        description: "You can't do anything",
        bullets: [
            "You are incapacitated and can't move or speak.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Petrified",
        optional: "Standard rule",
        icon: "stone-pile",
        subtitle: "You are transformed into stone",
        description: "You are transformed, along with any nonmagical objects you are wearing or carrying, into a solid inanimate substance (usually stone)",
        reference: "PHB, pg. 291.",
        bullets: [
            "Your weight increases by a factor of ten, and you cease aging.",
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws.",
            "You have resistance to all damage.",
            "You are immune to poison and disease, though a poison or disease already in your system is only suspended, not neutralized."
        ]
    },
    {
        title: "Poisoned",
        optional: "Standard rule",
        icon: "deathcab",
        subtitle: "You are poisoned",
        description: "You are poisoned",
        reference: "PHB, pg. 292.",
        bullets: [
            "You have disadvantage on attack rolls and ability checks."
        ]
    },
    {
        title: "Prone",
        optional: "Standard rule",
        icon: "crawl",
        subtitle: "You are prone",
        description: "You are prone",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your only movement option is to crawl, unless you stand up.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage if the attacker is within 5 feet of you, otherwise the attack roll has disadvantage."
        ]
    },
    {
        title: "Restrained",
        optional: "Standard rule",
        icon: "imprisoned",
        subtitle: "You are restrained",
        description: "You are restrained",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage.",
            "You have disadvantage on Dexterity saving throws."
        ]
    },
    {
        title: "Soulbound**",
        optional: "Homebrew rule",
        icon: "chained-heart",
        subtitle: "Bound by a shared soul fragment",
        description: "A permanent, double-edged psychic connection.",
        reference: "Soulbound Mechanics",
        bullets: [
        "<b>Psychic Link (30ft):</b> Telepathy, sense the emotions and position of your soulbound partner. Advantage on Insight checks about them.",
        "<b>Whispers & Weakness:</b> You hear the hunger whispers of your soulbound partner. You have Disadvantage on saves against their charm and vulnerability to void mind attacks.",
        "<b>Feedback Pain:</b> When your soulbound partner uses charm or soul drain, make a DC 12 CON save or take 1d4 psychic damage.",
        "<b>Shared Withdrawal:</b> When the link prevents a hunger spiral, you gain 1 exhaustion and take 1d6 psychic damage per exhaustion level you have.",
        "<b>Dream Spy:</b> After the soulbound partner uses Dream Thief's Siphon, you can enter the victim's dreams for 1 minute. On a failure, you hear their screams for 1d4 nights (DC 14 CON save each night or gain exhaustion).",
        "<b>Shared Wounds:</b> If you fall, your soulbound partner must save or gain exhaustion. You take 1/4 damage from his Soul Drain. Your death triggers a catastrophic hunger spiral in them.",
        "<b>Soul-Deep Strike (1/Short Rest):</b> Channel energy to add 2d8 radiant to your soulbound partner's next attack, redirect a missed attack, or empower your own strike."
]
},
    {
        title: "Soulburn**",
        optional: "Homebrew rule",
        icon: "defibrilate",
        subtitle: "Scarred by a severed fiendish bond",
        description: "The permanent soul-wound from a shattered psychic tether to a cambion.",
        reference: "Soulbound Mechanics",
        bullets: [
        "<b>Fiend's Final Curse:</b> On the soulbound partner's death, make a DC 15 CHA save. On a failure, you are permanently marked as a mortal enemy of fiends, granting Disadvantage on saves against their charm and fear effects.",
        "<b>Soul's Scar:</b> Your max HP is permanently reduced by the amount of necrotic damage you took when the bond was first forged. This can only be restored by a Wish spell or a profound quest.",
        "<b>Phantom Limb:</b> For 1d4 weeks, you have Disadvantage on Wisdom (Perception) checks as your mind reels from the sudden psychic silence.",
        "<b>Echo of the Feast (Optional):</b> Once per long rest, upon reducing a humanoid to 0 HP, you may regain hit points equal to half your Soul's Scar reduction, a grim reminder of the bond's power."
]
},
    {
        title: "Stunned",
        optional: "Standard rule",
        icon: "internal-injury",
        subtitle: "You are stunned",
        description: "You are stunned",
        reference: "PHB, pg. 292.",
        bullets: [
            "You have the incapacitated condition.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Unconscious",
        optional: "Standard rule",
        icon: "coma",
        subtitle: "You are unconscious",
        description: "You are unconscious",
        reference: "PHB, pg. 292.",
        bullets: [
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "You drop whatever you're holding and fall prone.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws.",
        ]
    },
    {
        title: "Dying",
        optional: "Standard rule",
        icon: "dead-head",
        subtitle: "You are dying",
        description: "You have been dropped to zero hit points and are dying",
        reference: "PHB, pg. 197.",
        bullets: [
            "If you are reduced to 0 hit points by damage that fails to kill you, you fall unconscious and are dying.",
            "If you receive any healing you immediately regain consciousness again and no longer dying.",
            "When dying, at the start of each of your turns you make a death saving throw. Roll a d20 and do not add any modifiers.",
            "A 10 or higher is a success, 9 or lower is a failure.",
            "On your third success, you become stable.",
            "On your third failure, you die.",
            "Rolling a 1 counts as two failures.",
            "Rolling a 20 immediately causes you to regain 1 hit point.",
            "You can also be stabilized by an ally taking the Stabilize action and succeeding on a DC 10 Wisdom (Medicine) check.",
            "Once stable, you regain 1 hit point after 1d4 hours."
        ]
    }
]
