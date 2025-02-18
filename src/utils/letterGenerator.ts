const templates = {
  romantic: [
    `My dearest {name},

In the quiet moments of contemplation, I find myself overwhelmed by the depth of my feelings for you. Each day that passes only serves to deepen my affection, like a river carving its way through the landscape of my heart. Your presence in my life has brought colors I never knew existed, painting my world with the vibrant hues of love and joy.

When I think of you, time seems to stand still. Your smile has become my favorite sight, your laughter my favorite melody. The way your eyes light up when you're excited about something, the gentle way you care for those around you - every little detail about you has become precious to me.

You've taught me what it means to truly care for someone, to see beauty in the smallest moments we share. Whether we're sharing our dreams under starlit skies or simply sitting in comfortable silence, every moment with you feels like a gift.

With all my love and devotion,
Yours truly`,
    
    `Beloved {name},

As I write these words, my heart overflows with emotions that words can barely contain. You've become the first thought in my morning and the last whisper in my dreams. Your presence in my life feels like the warmth of sunshine after a long winter - bringing light, warmth, and the promise of beautiful things to come.

I find myself noticing little things throughout my day that remind me of you - a song that makes me think of your smile, a sunset that matches the warmth in your eyes, or a gentle breeze that carries the same comfort as your presence. You've become intertwined with the very fabric of my daily existence in the most beautiful way.

In you, I've found not just love, but a best friend, a confidant, and a partner in all of life's adventures. Your strength inspires me, your kindness humbles me, and your love lifts me higher than I ever thought possible.

Forever yours,
With deepest affection`
  ],
  
  shakespeare: [
    `Dearest {name},

Shall I compare thee to a summer's day? Nay, for thou art more lovely and more temperate. Through winter's frost and summer's heated gaze, my heart doth beat in rhythm with thy name. In every flower that blooms, I see thy face; in every star that shines, thy eyes do gleam.

Time's relentless march may change the world around, but my devotion stands as constant as the Northern Star. Thou art the muse that doth inspire my soul, the light that guides me through the darkest night. In thee, I find the poetry of life itself, each moment a sonnet written in the language of love.

When harsh winds do shake the darling buds of May, my thoughts of thee remain forever spring. Thy beauty and thy grace shall never fade, for in my heart, eternal summer sings.

With quill in hand and love in heart,
Thine eternally`,

    `Most precious {name},

What light through yonder window breaks? 'Tis the radiance of thy soul, illuminating my world with unmatched splendor. Like a perfect summer's eve, thou doth bring warmth to my heart and peace to my troubled mind.

In mine eyes, thou art the fairest creature that e'er did walk upon this mortal coil. Thy voice, sweeter than honey from the mountain's bees, doth sing songs that angels themselves would envy. Each step thou taketh leaves a trail of grace that makes the very ground beneath blessed.

Would that I had the wit of all the world's poets combined, still I could not capture the full measure of thy worth. Thou art more precious than all the jewels in Neptune's ocean, more radiant than Phoebus' fiery chariot.

Forever thy devoted admirer,
A heart enchanted`
  ],
  
  cringe: [
    `Hey {name}!1! OwO

Notices your amazing existence OMGGGG, I literally can't even begin to express how totes adorbs you are! *blushes furiously while hiding behind a kawaii pillow* You're like, the human equivalent of a rainbow unicorn sprinkled with glitter and wrapped in a burrito of pure awesomeness! 

Every time I see you, my heart goes doki-doki and my soul does a backflip! *falls over dramatically* You're the poggers to my chungus, the UwU to my OwO, the yeet to my yolo! I've been trying to tell you this for like, forever (aka since last Tuesday XD).

Rolls around in a pile of sparkly emojis Your smile is literally brighter than my phone screen at 3 AM when I'm looking at memes! And that's saying something because my brightness is always at maximum! >w<

XOXO (but like, not in a weird way)
*dies from embarrassment but respawns because you're just that amazing
Your secret admirer :3 UwU`,

    `Dearest {name},

UwU notices your amazing personality. Is it hot in here, or is it just you? sweats nervously while adjusting my cat ears..... You're literally the most kawaii person I've ever seen in my entire life (all 16 years of it!)! 

Every time you walk by, I'm like AAAAAAAA internally! falls off chair in gay panic..... You're so cool that even ice cubes are jealous! Your vibe check results are literally off the charts! I can't even function properly when you're around (more than usual XD).

Aggressively throws glitter everywhere. You're the Minecraft to my Roblox, the TikTok to my cringe compilation, the pog to my champ! I literally can't even right now! *hyperventilates in Gen Z*

*dies from embarrassment
Your biggest fan!
P.S. This isn't weird at all, right? RIGHT?! O_O`
  ],
  
  secret: [
    `Dear {name},

From the shadows of anonymity, I gather the courage to express what my heart has held dear for so long. Like a silent observer of a magnificent painting, I've watched you illuminate every room you enter, touching lives with your unique grace and charm.

Your presence captivates me in ways words struggle to capture. The way you carry yourself with such natural elegance, the kindness you show to others without hesitation, the strength you display in facing life's challenges - every aspect of your being has left an indelible mark on my soul.

Though I remain unnamed, know that someone sees the depth of your beauty, both inside and out. Someone appreciates the little things about you - the way your eyes crinkle when you laugh genuinely, how passionate you become when speaking about things you love, the gentle way you encourage others.

Perhaps one day I'll find the courage to step from these shadows into the light of your recognition. Until then, know that you are admired, appreciated, and cherished more than you could imagine.

Until our paths cross,
Your Secret Admirer`,

    `To {name},

In the gentle embrace of anonymity, I find the strength to pour out the feelings that have long resided in my heart. Like a distant star admiring the moon's beauty, I've watched you from afar, captivated by the way you move through life with such grace and authenticity.

Your kindness touches souls, your laughter heals hearts, and your spirit inspires dreams. The world becomes a brighter place when you share your smile, and even the darkest days seem bearable when you're around. You possess a rare quality that makes everyone feel seen and valued in your presence.

Though these words come without a name, they carry the weight of genuine admiration and respect. Every day, I witness the small acts of kindness you perform, thinking no one notices. But I notice. I notice how you hold doors for strangers, how you listen intently when others speak, how you stand up for what's right even when it's difficult.

Maybe someday, when the time is right, I'll gather the courage to reveal myself. Until then, please know that you are appreciated more than words can express.

With admiration,
Someone who sees you`
  ]
};

export function generateLetter(name: string, relationship: string, style: string): string {
  const styleTemplates = templates[style as keyof typeof templates];
  const randomTemplate = styleTemplates[Math.floor(Math.random() * styleTemplates.length)];
  return randomTemplate.replace(/\{name\}/g, name);
}