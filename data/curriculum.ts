import type { Module } from './types'

export const curriculum: Module[] = [
  {
    id: 'module-01',
    slug: 'bitcoin-and-why-it-matters',
    number: 1,
    title: 'What Is Bitcoin and Why Does It Matter?',
    subtitle: 'Foundations',
    week: 1,
    difficulty: 'beginner',
    xp: 100,
    duration: '45 min',
    description:
      'Understand the problem Bitcoin was created to solve, where it came from, and how it compares to traditional money, gold, and other assets.',
    objectives: [
      'Explain the problem with traditional money and why inflation matters',
      'Describe who created Bitcoin and the core idea behind it',
      'Compare Bitcoin to gold, fiat currency, and other cryptocurrencies',
      'Explain Bitcoin simply to someone who has never heard of it',
    ],
    lessons: [
      {
        id: 'lesson-01-01',
        slug: 'the-problem-with-traditional-money',
        title: 'The Problem with Traditional Money',
        duration: '10 min',
        icon: '🏦',
        description:
          'Before you can understand Bitcoin, you need to understand what it was built to replace — and why that matters for ordinary people.',
        slides: [
          {
            type: 'content',
            id: 'slide-01-01-01',
            icon: '💵',
            title: 'What Is Money, Really?',
            body: 'Money is a technology — a tool humans invented to make trading easier. For thousands of years, people used shells, gold, grain, and other commodities as money. The key insight: money works when people agree it has value. Today, most money is just numbers in a computer controlled by banks and governments.',
            bullets: [
              'Medium of exchange — makes trading possible without barter',
              'Store of value — preserves purchasing power over time',
              'Unit of account — a standard way to price everything',
            ],
          },
          {
            type: 'flipcards',
            id: 'slide-01-01-02',
            title: 'The Functions of Money',
            instruction: 'Click each card to reveal the definition',
            cards: [
              {
                id: 'fc-01',
                term: 'Medium of Exchange',
                icon: '🔄',
                definition:
                  'Money lets you sell goods for cash and buy other goods with that cash — eliminating the need for a "double coincidence of wants" in barter.',
              },
              {
                id: 'fc-02',
                term: 'Store of Value',
                icon: '🏆',
                definition:
                  'Good money holds its purchasing power over time. If you earn money today, you should be able to spend it with similar buying power next year.',
              },
              {
                id: 'fc-03',
                term: 'Unit of Account',
                icon: '📏',
                definition:
                  'Money provides a common standard for measuring the value of all goods and services — making prices and comparisons possible.',
              },
              {
                id: 'fc-04',
                term: 'Deferred Payment',
                icon: '📅',
                definition:
                  'Money enables loans and contracts — you can agree to pay someone in the future, with confidence that the value of money will be understood then.',
              },
            ],
          },
          {
            type: 'content',
            id: 'slide-01-01-03',
            icon: '🖨️',
            title: 'How Governments Control Money',
            body: 'Modern money is called "fiat" — from Latin for "let it be done." It has value because governments declare it does, not because it\'s backed by gold or anything tangible. Central banks can create new money at will through quantitative easing (QE). This gives governments enormous power — but it also means your savings can be quietly devalued without your consent.',
            highlight:
              'Between 2020 and 2022, the US Federal Reserve created more dollars than in all of prior history combined.',
          },
          {
            type: 'content',
            id: 'slide-01-01-04',
            icon: '📉',
            title: 'Inflation: The Silent Tax',
            body: 'When more money is printed without a matching increase in goods and services, each unit of money buys less — this is inflation. If inflation runs at 10% per year, your savings lose half their purchasing power in just 7 years. In countries like Nigeria, Turkey, and Argentina, inflation has been far worse — wiping out lifetime savings in months.',
            bullets: [
              'Naira inflation: over 30% annually in recent years',
              'Turkish lira lost 80% of its value against the dollar in 5 years',
              'Zimbabwe and Venezuela saw hyperinflation destroy entire economies',
            ],
          },
          {
            type: 'content',
            id: 'slide-01-01-05',
            icon: '💥',
            title: 'The 2008 Crisis: A Turning Point',
            body: "In 2008, reckless bank lending triggered a global financial collapse. Governments bailed out the banks with taxpayer money while ordinary people lost homes, jobs, and savings. No banker went to jail. It was this failure — and the announcement of yet another bank bailout — that directly inspired Satoshi Nakamoto to create Bitcoin: a financial system that doesn't require trust in banks or governments.",
            highlight:
              '"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks" — the message Satoshi embedded in Bitcoin\'s first block.',
          },
        ],
      },
      {
        id: 'lesson-01-02',
        slug: 'bitcoin-the-origin-story',
        title: 'Bitcoin: The Origin Story',
        duration: '9 min',
        icon: '₿',
        description:
          'Meet the anonymous creator, understand the core whitepaper idea, and learn why Bitcoin\'s mysterious origin is actually a feature.',
        slides: [
          {
            type: 'content',
            id: 'slide-01-02-01',
            icon: '🕵️',
            title: 'Who Is Satoshi Nakamoto?',
            body: "On October 31, 2008, someone using the pseudonym Satoshi Nakamoto published a 9-page paper to a cryptography mailing list. No one knows who Satoshi is — they could be one person or a group, anywhere in the world. In 2010, Satoshi handed the project to other developers and disappeared. The mystery matters because it proves Bitcoin has no central authority — no CEO, no spokesperson, no one who can be pressured, arrested, or silenced.",
          },
          {
            type: 'content',
            id: 'slide-01-02-02',
            icon: '📄',
            title: 'The Bitcoin Whitepaper in Plain English',
            body: 'The Bitcoin whitepaper is titled "Bitcoin: A Peer-to-Peer Electronic Cash System." Its core idea: allow two people to send value directly to each other — without a bank in the middle — using cryptography to make it trustworthy. Satoshi solved the "double-spend problem": how do you prevent someone from spending the same digital money twice without a central authority keeping score?',
            highlight: 'The whitepaper is only 9 pages. You can read the whole thing at bitcoin.org/bitcoin.pdf — it\'s worth it.',
          },
          {
            type: 'flipcards',
            id: 'slide-01-02-03',
            title: 'Key Concepts from the Whitepaper',
            instruction: 'Click each card to reveal the definition',
            cards: [
              {
                id: 'fc-dec',
                term: 'Decentralization',
                icon: '🌐',
                definition:
                  'No single point of control. Thousands of computers around the world run Bitcoin — no government or company can shut it down by targeting one location.',
              },
              {
                id: 'fc-trust',
                term: 'Trustlessness',
                icon: '🔐',
                definition:
                  "You don't need to trust anyone. Mathematics and code enforce the rules — not banks, governments, or even the original creator.",
              },
              {
                id: 'fc-perm',
                term: 'Permissionless',
                icon: '🚪',
                definition:
                  'No one can stop you from using Bitcoin. There\'s no account application, no ID check, no bank that can refuse you access.',
              },
              {
                id: 'fc-cen',
                term: 'Censorship-Resistance',
                icon: '🛡️',
                definition:
                  'No government or company can block your transactions. Bitcoin moves regardless of borders, politics, or who you are.',
              },
            ],
          },
          {
            type: 'content',
            id: 'slide-01-02-04',
            icon: '⛏️',
            title: 'The Genesis Block: A Message in Code',
            body: 'On January 3, 2009, Satoshi mined the very first Bitcoin block — called the Genesis Block. Embedded in its data was a newspaper headline: "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks." This was both a timestamp and a message — Bitcoin was created as a direct response to a financial system that had just failed the world. Every Bitcoin in existence traces back to this single block.',
          },
        ],
      },
      {
        id: 'lesson-01-03',
        slug: 'bitcoin-vs-everything-else',
        title: 'Bitcoin vs Everything Else',
        duration: '10 min',
        icon: '⚖️',
        description:
          'How does Bitcoin compare to gold, fiat currency, and other cryptocurrencies? Understanding these comparisons is fundamental to Bitcoin research.',
        slides: [
          {
            type: 'comparison',
            id: 'slide-01-03-01',
            title: 'Bitcoin vs Gold',
            otherLabel: 'Gold',
            rows: [
              { attribute: 'Supply cap', bitcoin: '21 million — fixed forever', other: 'Unknown — new deposits still found' },
              { attribute: 'Portability', bitcoin: 'Send globally in minutes', other: 'Heavy, costly to transport' },
              { attribute: 'Divisibility', bitcoin: '1 sat = 0.00000001 BTC', other: 'Difficult to divide physically' },
              { attribute: 'Verifiability', bitcoin: 'Verify instantly, trustlessly', other: 'Requires assay testing' },
              { attribute: 'Confiscation risk', bitcoin: 'Memorize a seed phrase — unconfiscatable', other: 'Easily confiscated physically' },
              { attribute: 'History', bitcoin: '16+ years', other: '5,000+ years as money' },
            ],
          },
          {
            type: 'comparison',
            id: 'slide-01-03-02',
            title: 'Bitcoin vs Fiat Currency',
            otherLabel: 'Fiat (e.g. Naira, Dollar)',
            rows: [
              { attribute: 'Supply control', bitcoin: 'Hard-coded: max 21M', other: 'Unlimited — central bank decides' },
              { attribute: 'Inflation resistance', bitcoin: 'Disinflationary by design', other: 'Subject to political pressure' },
              { attribute: 'Censorship resistance', bitcoin: 'No one can block transactions', other: 'Banks can freeze accounts' },
              { attribute: 'Access', bitcoin: 'Anyone, anywhere, any time', other: 'Requires bank account or ID' },
              { attribute: 'Settlement speed', bitcoin: '~10 min on-chain, instant on Lightning', other: 'Days for international transfers' },
              { attribute: 'Transparency', bitcoin: 'All transactions public', other: 'Opaque banking records' },
            ],
          },
          {
            type: 'content',
            id: 'slide-01-03-03',
            icon: '🔍',
            title: 'Bitcoin vs Other Cryptocurrencies',
            body: "Bitcoin is often grouped with 'crypto' but is fundamentally different from every other cryptocurrency. Most altcoins have: a company or foundation behind them, venture capital investors with early token allocations, a CEO or development team that can be pressured, and a history that can be traced back to a single founding decision. Bitcoin has none of these.",
            bullets: [
              '16+ years of uninterrupted operation with no company behind it',
              'Never been successfully hacked at the protocol level',
              'The only cryptocurrency with a credibly decentralized origin',
              'No pre-mine, no VC allocation, no CEO, no marketing budget',
              'Fixed monetary policy that cannot be changed by any authority',
            ],
          },
          {
            type: 'quiz',
            id: 'slide-01-03-quiz',
            title: 'Module 1 Quiz',
            questions: [
              {
                id: 'q1',
                question: 'What problem did Satoshi Nakamoto solve that made Bitcoin possible?',
                options: [
                  'How to make internet faster',
                  'The double-spend problem — spending the same digital money twice',
                  'How to mine gold digitally',
                  'How to create a government-backed digital currency',
                ],
                correctIndex: 1,
                explanation: 'The double-spend problem was the key challenge: how do you prevent someone from copying and spending digital money twice without a central authority keeping track? Bitcoin\'s blockchain solved this.',
              },
              {
                id: 'q2',
                question: 'What does "fiat currency" mean?',
                options: [
                  'Currency backed by gold reserves',
                  'Currency issued by private banks',
                  'Currency that has value by government decree, not physical backing',
                  'Currency used only in Italy',
                ],
                correctIndex: 2,
                explanation: 'Fiat comes from Latin meaning "let it be done." Fiat currency has value because governments say it does — not because it\'s backed by gold or any physical commodity.',
              },
              {
                id: 'q3',
                question: 'What headline did Satoshi embed in Bitcoin\'s Genesis Block?',
                options: [
                  '"Bitcoin: A New Digital Currency"',
                  '"Chancellor on brink of second bailout for banks"',
                  '"Internet currency launches today"',
                  '"Gold reaches all-time high"',
                ],
                correctIndex: 1,
                explanation: 'Satoshi embedded a Times of London headline from January 3, 2009 — the same day the Genesis Block was mined. It was a timestamp and a statement about why Bitcoin was created.',
              },
              {
                id: 'q4',
                question: 'Which of these is NOT a property that makes Bitcoin different from most other cryptocurrencies?',
                options: [
                  'No pre-mine or VC token allocation',
                  'Has a CEO and legal team',
                  'Credibly decentralized origin',
                  'Fixed supply of 21 million',
                ],
                correctIndex: 1,
                explanation: 'Bitcoin has no CEO. It\'s open-source software maintained by volunteers and contributors worldwide. This is what makes it fundamentally different from most altcoins, which have a company or foundation controlling them.',
              },
              {
                id: 'q5',
                question: 'Why is Bitcoin\'s anonymous creator Satoshi Nakamoto considered a feature rather than a problem?',
                options: [
                  'It makes Bitcoin mysterious and exciting',
                  'It means Bitcoin has no central authority that can be pressured or arrested',
                  'Anonymous creators are more trustworthy than known ones',
                  'It protects Satoshi from paying taxes',
                ],
                correctIndex: 1,
                explanation: 'Because Satoshi is unknown, there is no Bitcoin "headquarters" to shut down, no CEO to arrest, and no spokesperson to pressure. This makes Bitcoin genuinely decentralized.',
              },
            ],
          },
          {
            type: 'assignment',
            id: 'slide-01-assign',
            title: 'Module 1 Assignment',
            description:
              'Find one article, tweet thread, or video that explains Bitcoin to a beginner. Evaluate it using what you\'ve learned.',
            steps: [
              'Search for "Bitcoin explained for beginners" on Google, YouTube, or Twitter/X',
              'Read or watch the full piece — take notes as you go',
              'Identify: what does it get right? What does it miss or oversimplify?',
              'Write 3–5 sentences summarizing what you learned or found confusing',
              'Share your find and your evaluation in the community group',
            ],
            deliverable:
              'A link to the piece + 3–5 sentences of your evaluation. No right or wrong — honest reflection counts.',
          },
        ],
      },
    ],
  },

  {
    id: 'module-02',
    slug: 'how-bitcoin-actually-works',
    number: 2,
    title: 'How Bitcoin Actually Works',
    subtitle: 'Core Concepts',
    week: 2,
    difficulty: 'beginner',
    xp: 150,
    duration: '55 min',
    description:
      'A non-technical deep dive into blockchain, transactions, mining, and the 21 million cap — the mechanisms that make Bitcoin unique.',
    objectives: [
      'Explain what a blockchain is in plain language',
      'Describe what happens when someone sends Bitcoin',
      'Understand mining and why Proof of Work matters',
      'Explain the 21 million supply cap and Bitcoin halvings',
    ],
    lessons: [
      {
        id: 'lesson-02-01',
        slug: 'the-blockchain-explained',
        title: 'The Blockchain Explained',
        duration: '12 min',
        icon: '⛓️',
        description:
          'The blockchain is Bitcoin\'s public ledger — shared across thousands of computers worldwide. Here\'s how it actually works.',
        slides: [
          {
            type: 'content',
            id: 'slide-02-01-01',
            icon: '📒',
            title: 'What Is a Blockchain?',
            body: 'Think of the Bitcoin blockchain as a public ledger — like an accounting book that records every transaction ever made. But unlike a bank\'s ledger (visible and editable only by the bank), the Bitcoin blockchain is shared across thousands of computers around the world. No single person controls it. Everyone can see it. No one can erase or alter past entries.',
            highlight: 'The Bitcoin blockchain has recorded every transaction since January 2009 — over 900 million transactions — without a single successful alteration.',
          },
          {
            type: 'content',
            id: 'slide-02-01-02',
            icon: '🔗',
            title: 'How Blocks Connect',
            body: "Every ~10 minutes, a new 'block' of transactions is added to the chain. Each block contains a cryptographic fingerprint (called a hash) of the previous block — this is what makes them a 'chain.' If someone tries to change a past transaction, they'd need to redo all the cryptographic work for every block after it. On a network this large, that's computationally impossible.",
          },
          {
            type: 'flipcards',
            id: 'slide-02-01-03',
            title: 'Key Blockchain Terms',
            instruction: 'Click each card to reveal the definition',
            cards: [
              {
                id: 'fc-block',
                term: 'Block',
                icon: '📦',
                definition:
                  'A bundle of ~2,000 recent transactions, sealed with cryptography and added to the chain approximately every 10 minutes.',
              },
              {
                id: 'fc-hash',
                term: 'Hash',
                icon: '🔑',
                definition:
                  'A unique digital fingerprint — like a snowflake, no two are alike. Change even one character in a block and the entire hash changes completely.',
              },
              {
                id: 'fc-node',
                term: 'Node',
                icon: '💻',
                definition:
                  'A computer running Bitcoin software and keeping a full copy of the blockchain. There are ~50,000+ nodes worldwide — any can verify any transaction.',
              },
              {
                id: 'fc-merkle',
                term: 'Merkle Tree',
                icon: '🌳',
                definition:
                  "A data structure that efficiently summarizes all transactions in a block. It allows anyone to verify a transaction was included without downloading the whole block.",
              },
            ],
          },
          {
            type: 'content',
            id: 'slide-02-01-04',
            icon: '🛡️',
            title: 'Why It\'s Nearly Impossible to Cheat',
            body: "To rewrite Bitcoin history, an attacker would need to control more than 50% of all mining power on the network — a '51% attack.' Given Bitcoin's current hash rate (the network's total computing power), this would require spending billions of dollars on hardware and energy. And it would destroy the very value you're trying to steal. The attack is economically self-defeating.",
          },
          {
            type: 'content',
            id: 'slide-02-01-05',
            icon: '📝',
            title: 'Bitcoin Improvement Proposals (BIPs)',
            body: "Bitcoin is open-source software — anyone can propose changes. A Bitcoin Improvement Proposal (BIP) is the formal process for suggesting upgrades. Unlike traditional software, there's no single authority who approves changes. BIPs are discussed, debated, and adopted through rough consensus among developers, miners, and node operators. This is why Bitcoin changes slowly — and why that's a feature, not a bug.",
            highlight: 'Key BIPs include SegWit (BIP141), which improved transaction efficiency, and Taproot (BIP341), which enhanced privacy and smart contract capability.',
          },
        ],
      },
      {
        id: 'lesson-02-02',
        slug: 'bitcoin-transactions',
        title: 'Bitcoin Transactions',
        duration: '10 min',
        icon: '💸',
        description:
          'What actually happens when you send Bitcoin? Keys, addresses, fees, and UTXOs — explained without the jargon.',
        slides: [
          {
            type: 'content',
            id: 'slide-02-02-01',
            icon: '📡',
            title: 'What Happens When You Send Bitcoin?',
            body: "When you send Bitcoin, you're broadcasting a message to the network: 'I want to send X BTC from address A to address B.' This message is cryptographically signed with your private key — proving you own the bitcoin without revealing your key. The transaction enters a 'mempool' (a waiting room of unconfirmed transactions), and miners pick it up to include in the next block.",
          },
          {
            type: 'flipcards',
            id: 'slide-02-02-02',
            title: 'Wallets, Keys, and Addresses',
            instruction: 'Click each card to reveal the definition',
            cards: [
              {
                id: 'fc-privkey',
                term: 'Private Key',
                icon: '🗝️',
                definition:
                  'A secret number that proves you own your bitcoin. Never share it. Whoever has your private key controls your bitcoin — there is no password recovery.',
              },
              {
                id: 'fc-pubkey',
                term: 'Public Key',
                icon: '🔓',
                definition:
                  'Derived mathematically from your private key. Used to create Bitcoin addresses. Sharing it is safe — no one can work backwards from a public key to a private key.',
              },
              {
                id: 'fc-addr',
                term: 'Bitcoin Address',
                icon: '📬',
                definition:
                  "Like an email address — share it with someone to receive bitcoin from them. Each address is a hash of your public key. You can generate as many as you want.",
              },
              {
                id: 'fc-wallet',
                term: 'Wallet',
                icon: '👛',
                definition:
                  "Software that manages your keys and signs transactions. Your wallet doesn't store bitcoin — the blockchain does. Your wallet stores the keys that prove ownership.",
              },
            ],
          },
          {
            type: 'content',
            id: 'slide-02-02-03',
            icon: '⛽',
            title: 'Transaction Fees',
            body: "Bitcoin miners are paid two ways: newly created bitcoin (the block reward) and transaction fees. Fees are set by the sender — pay more to get confirmed faster, or less to wait longer. During busy periods, fees rise as users compete for limited block space. This is Bitcoin's free market for settlement: no fixed fee schedule, no intermediaries taking a cut.",
            highlight: 'You can check current recommended fees in real time at mempool.space — the data is pulled directly from the Bitcoin network.',
          },
          {
            type: 'content',
            id: 'slide-02-02-04',
            icon: '💰',
            title: 'Understanding UTXOs',
            body: "Bitcoin doesn't track balances the way a bank does. Instead, it tracks Unspent Transaction Outputs (UTXOs). Think of UTXOs like cash bills — if you have a 0.5 BTC 'bill' and want to send 0.1 BTC, the whole bill gets spent and you receive 0.4 BTC back as 'change.' Your balance is the sum of all your UTXOs.",
          },
        ],
      },
      {
        id: 'lesson-02-03',
        slug: 'mining-and-consensus',
        title: 'Mining and Consensus',
        duration: '11 min',
        icon: '⛏️',
        description:
          'Mining is Bitcoin\'s security system. Here\'s how computers compete to confirm transactions — and why energy expenditure is the point.',
        slides: [
          {
            type: 'content',
            id: 'slide-02-03-01',
            icon: '🏁',
            title: 'What Is Mining?',
            body: "Bitcoin miners are computers competing to add the next block of transactions to the blockchain. Each miner races to solve a mathematical puzzle — finding a number (called a 'nonce') that makes the block's hash meet a specific target. The first miner to solve it earns the block reward plus all transaction fees in that block. This competition ensures no single party controls what gets recorded.",
          },
          {
            type: 'content',
            id: 'slide-02-03-02',
            icon: '🎯',
            title: 'Proof of Work: The Competition',
            body: "The puzzle miners solve is called Proof of Work (PoW). It's intentionally hard to solve but trivially easy for others to verify. Think of it as a lottery where the more tickets (hashing power) you have, the better your odds — but winning is never guaranteed. This randomness, combined with the enormous cost of participation, makes the system fair and resistant to manipulation.",
          },
          {
            type: 'content',
            id: 'slide-02-03-03',
            icon: '⚡',
            title: 'Why Energy Is a Feature, Not a Bug',
            body: "Critics say Bitcoin 'wastes energy.' But the energy cost is precisely what makes Bitcoin secure. Real-world energy expenditure creates a real-world barrier to attack — you can't create fake blocks by writing software, you need physical hardware running at full power. The energy is the security. And increasingly, that energy comes from stranded, wasted, or renewable sources.",
            highlight: 'Bitcoin mining now uses over 50% sustainable energy by some estimates — more than almost any other major industry.',
          },
          {
            type: 'content',
            id: 'slide-02-03-04',
            icon: '🎛️',
            title: 'The Difficulty Adjustment',
            body: "Every 2,016 blocks (~2 weeks), Bitcoin automatically adjusts how hard the mining puzzle is. If miners joined and the network sped up, the puzzle gets harder. If miners left and it slowed down, it gets easier. This keeps blocks arriving every ~10 minutes on average — regardless of how much or how little mining power the network has. It's one of Satoshi's most elegant inventions.",
          },
        ],
      },
      {
        id: 'lesson-02-04',
        slug: 'the-21-million-cap',
        title: 'The 21 Million Cap',
        duration: '9 min',
        icon: '🎯',
        description:
          'Why will there only ever be 21 million Bitcoin? What are halvings? And what happens when all Bitcoin are mined?',
        slides: [
          {
            type: 'content',
            id: 'slide-02-04-01',
            icon: '🔒',
            title: 'Why Only 21 Million?',
            body: "Bitcoin's protocol hard-codes that no more than 21 million BTC will ever exist. This isn't controlled by any company or government — it's written into the code and enforced by every node on the network. No one — not even the most powerful government — can create more bitcoin. This makes Bitcoin fundamentally scarce in a way that no previous form of money has been.",
            highlight: 'As of 2025, approximately 19.8 million Bitcoin have been mined — meaning over 94% of all Bitcoin that will ever exist are already in circulation.',
          },
          {
            type: 'content',
            id: 'slide-02-04-02',
            icon: '✂️',
            title: 'Bitcoin Halvings',
            body: "When Bitcoin launched, miners earned 50 BTC per block. Every 210,000 blocks (~4 years), this reward is cut in half — an event called the 'halving.' The fourth halving occurred in April 2024, reducing the reward to 3.125 BTC per block. Eventually the reward reaches zero and miners will earn only transaction fees. Halvings create predictable supply reduction — the opposite of central bank money printing.",
            bullets: [
              'Halving 1 (2012): 50 → 25 BTC per block',
              'Halving 2 (2016): 25 → 12.5 BTC per block',
              'Halving 3 (2020): 12.5 → 6.25 BTC per block',
              'Halving 4 (2024): 6.25 → 3.125 BTC per block',
            ],
          },
          {
            type: 'content',
            id: 'slide-02-04-03',
            icon: '📊',
            title: 'The Disinflationary Schedule',
            body: "Bitcoin's issuance schedule is known decades in advance — you can calculate exactly how many bitcoin will exist at any future date. Compare this to fiat currencies, where central banks expand money supply in response to political pressure. Bitcoin's predictable supply is why many researchers describe it as the hardest money ever created.",
          },
          {
            type: 'quiz',
            id: 'slide-02-quiz',
            title: 'Module 2 Quiz',
            questions: [
              {
                id: 'q2-1',
                question: 'What is a "mempool" in Bitcoin?',
                options: [
                  'A pool of mining hardware',
                  'A waiting room of unconfirmed transactions',
                  'A storage location for private keys',
                  'A community of Bitcoin developers',
                ],
                correctIndex: 1,
                explanation: 'The mempool (memory pool) is where unconfirmed transactions wait before being picked up by miners and included in a block.',
              },
              {
                id: 'q2-2',
                question: 'What does your Bitcoin wallet actually store?',
                options: [
                  'Your Bitcoin, in encrypted form',
                  'A copy of the blockchain',
                  'The private keys that prove ownership of your Bitcoin',
                  'Your transaction history only',
                ],
                correctIndex: 2,
                explanation: 'Your wallet stores your private keys — not your Bitcoin. The Bitcoin itself is recorded on the blockchain. Your keys are what prove you own it.',
              },
              {
                id: 'q2-3',
                question: 'How often does Bitcoin\'s difficulty adjustment occur?',
                options: [
                  'Every block (~10 minutes)',
                  'Every 2,016 blocks (~2 weeks)',
                  'Every halving (~4 years)',
                  'Whenever mining power doubles',
                ],
                correctIndex: 1,
                explanation: 'Every 2,016 blocks (approximately every 2 weeks), Bitcoin automatically adjusts mining difficulty to maintain a ~10 minute average block time.',
              },
              {
                id: 'q2-4',
                question: 'After the April 2024 halving, how many Bitcoin does a miner earn per block?',
                options: ['6.25 BTC', '3.125 BTC', '1.5625 BTC', '12.5 BTC'],
                correctIndex: 1,
                explanation: 'The 2024 halving (the 4th) reduced the block reward from 6.25 BTC to 3.125 BTC per block.',
              },
            ],
          },
          {
            type: 'assignment',
            id: 'slide-02-assign',
            title: 'Module 2 Assignment',
            description:
              'Use a Bitcoin block explorer to find a real transaction and make sense of what you see.',
            steps: [
              'Go to mempool.space in your browser',
              'Wait for the next block to be mined — watch the mempool fill up',
              'Click on any recent transaction in the mempool or a recent block',
              'Take a screenshot of the transaction details page',
              'Write 5 sentences explaining what you see — include: the amount, fees, number of inputs/outputs, and confirmation status',
            ],
            deliverable:
              'A screenshot + 5 sentences. You don\'t need to understand everything — honest observation is the goal.',
          },
        ],
      },
    ],
  },

  {
    id: 'module-03',
    slug: 'mapping-the-bitcoin-ecosystem',
    number: 3,
    title: 'Mapping the Bitcoin Ecosystem',
    subtitle: 'Ecosystem Orientation',
    week: 3,
    difficulty: 'beginner',
    xp: 120,
    duration: '50 min',
    description:
      'Navigate the key players, organizations, communities, and layers that make up the Bitcoin ecosystem — know who does what and why they exist.',
    objectives: [
      'Identify the key categories of players in the Bitcoin ecosystem',
      'Explain what the Lightning Network is and why it matters',
      'Find and evaluate Bitcoin communities online and locally',
      'Name key Bitcoin non-profits and what they fund',
    ],
    lessons: [
      {
        id: 'lesson-03-01',
        slug: 'key-players-in-the-ecosystem',
        title: 'Key Players in the Ecosystem',
        duration: '12 min',
        icon: '👥',
        description:
          'From anonymous developers to global companies — who actually runs and builds Bitcoin?',
        slides: [
          {
            type: 'content',
            id: 'slide-03-01-01',
            icon: '💻',
            title: 'Who Builds Bitcoin?',
            body: "Bitcoin has no company, no CEO, and no official development team. It is open-source software maintained by a global network of volunteer and paid developers. Anyone can read the code, propose changes, or copy the project. This openness is what makes Bitcoin trustworthy — you don't have to trust the developers because you can verify what the code does.",
          },
          {
            type: 'flipcards',
            id: 'slide-03-01-02',
            title: 'The Bitcoin Ecosystem Players',
            instruction: 'Click each card to reveal the definition',
            cards: [
              {
                id: 'fc-devs',
                term: 'Developers',
                icon: '👨‍💻',
                definition:
                  'Write and maintain Bitcoin software. No boss, no company. Bitcoin Core is the main implementation — anyone can contribute. Changes require broad consensus.',
              },
              {
                id: 'fc-miners',
                term: 'Miners',
                icon: '⛏️',
                definition:
                  'Secure the network by competing to add new blocks. They invest in specialized hardware (ASICs) and electricity. They earn bitcoin as a reward.',
              },
              {
                id: 'fc-exchanges',
                term: 'Exchanges',
                icon: '💱',
                definition:
                  'Where people buy and sell bitcoin using fiat currency. Examples: Coinbase, Kraken, Binance, Yellow Card (Africa). They are custodians — they hold your keys.',
              },
              {
                id: 'fc-custody',
                term: 'Self-Custody',
                icon: '🔑',
                definition:
                  '"Not your keys, not your coins." Self-custody means you hold your own private keys — using hardware wallets (Coldcard, Ledger) or air-gapped devices.',
              },
            ],
          },
          {
            type: 'content',
            id: 'slide-03-01-03',
            icon: '🏢',
            title: 'Notable Bitcoin Companies',
            body: 'Several companies are building the Bitcoin ecosystem. Strike enables Lightning Network payments and remittances. River Financial provides Bitcoin-only financial services. Blockstream builds Bitcoin infrastructure, satellites, and hardware wallets. Casa and Unchained Capital specialize in secure self-custody. Yellow Card and Bitnob serve African users. OCEAN and Braiins build transparent mining infrastructure.',
          },
          {
            type: 'content',
            id: 'slide-03-01-04',
            icon: '🌱',
            title: 'Non-Profits and Advocacy',
            body: "Several non-profits support Bitcoin research and human rights. The Human Rights Foundation (HRF) funds Bitcoin development and advocates for financial freedom under authoritarian regimes. OpenSats funds open-source Bitcoin education and development. Btrust Builders (backed by Jack Dorsey) focuses on African and Global South Bitcoin education. These organizations support the ecosystem without owning or controlling it.",
            highlight: 'HRF has distributed over 10 million dollars in Bitcoin grants to developers and researchers across 30+ countries.',
          },
        ],
      },
      {
        id: 'lesson-03-02',
        slug: 'layer-2-and-lightning',
        title: 'Layer 2 and the Lightning Network',
        duration: '10 min',
        icon: '⚡',
        description:
          'The Lightning Network allows instant, near-free Bitcoin payments. Here\'s how it works and why it matters.',
        slides: [
          {
            type: 'content',
            id: 'slide-03-02-01',
            icon: '⚡',
            title: 'What Is the Lightning Network?',
            body: "The Lightning Network is a Layer 2 built on top of Bitcoin — a payment channel network enabling near-instant, nearly-free transactions. Instead of recording every small payment on the blockchain (which has limited space), Lightning lets two parties open a channel, make thousands of transactions between themselves off-chain, and only settle the final balance on-chain. Think of it this way: Bitcoin settles the restaurant bill; Lightning pays for your coffee.",
          },
          {
            type: 'content',
            id: 'slide-03-02-02',
            icon: '🔧',
            title: 'Other Layers on Bitcoin',
            body: "Beyond Lightning, other projects are building on top of Bitcoin's secure base layer. Stacks adds smart contracts and DeFi-like functionality while using Bitcoin for settlement. Rootstock (RSK) is an Ethereum-compatible sidechain. Ark is a newer protocol designed for easier Lightning onboarding and better privacy. These layers aim to expand what you can do with Bitcoin without changing the base layer's properties.",
          },
          {
            type: 'content',
            id: 'slide-03-02-03',
            icon: '🌍',
            title: 'Why Layers Matter for Research',
            body: "Understanding that Bitcoin has layers is essential for any serious researcher. When you read about 'Bitcoin transactions,' ask: is this on-chain or Lightning? When analyzing adoption, Lightning Network data is increasingly important for understanding real usage. The layered architecture means Bitcoin can scale to billions of users — by design.",
            highlight: 'Lightning Network capacity has grown from ~2,000 BTC in 2021 to over 5,000 BTC in 2025, with millions of daily transactions.',
          },
        ],
      },
      {
        id: 'lesson-03-03',
        slug: 'bitcoin-communities',
        title: 'Bitcoin Communities',
        duration: '9 min',
        icon: '🌐',
        description:
          'Where does the Bitcoin conversation happen — and how do you find trustworthy communities?',
        slides: [
          {
            type: 'content',
            id: 'slide-03-03-01',
            icon: '🐦',
            title: 'Online Communities',
            body: 'Bitcoin has vibrant online communities across multiple platforms. Bitcoin Twitter (X) is where most real-time discussion happens — from cutting-edge technical debates to policy and culture. Reddit\'s r/Bitcoin has millions of members but is more moderated and beginner-friendly. Nostr is a decentralized social media protocol popular with Bitcoiners who want censorship-resistant social media. Telegram groups range from beginner Q&A to technical developer discussion.',
          },
          {
            type: 'content',
            id: 'slide-03-03-02',
            icon: '🤝',
            title: 'Local Communities Across Africa',
            body: "Bitcoin communities exist in cities across Africa — Lagos, Nairobi, Accra, Kigali, Cape Town, and more. Local meetups are invaluable for beginners: you can ask questions freely, meet researchers, and find mentors. Bitcoin Ekasi in South Africa runs a Bitcoin circular economy. Bitcoin Lagos runs regular events. The African Bitcoin community is one of the most active and growing globally.",
            highlight: 'Find your local community by searching "Bitcoin [your city]" on Meetup.com, Twitter/X, or Telegram.',
          },
          {
            type: 'flipcards',
            id: 'slide-03-03-03',
            title: 'Finding Your Community',
            instruction: 'Click each card to reveal how to connect',
            cards: [
              {
                id: 'fc-twitter',
                term: 'Twitter/X',
                icon: '🐦',
                definition:
                  'Follow #Bitcoin hashtag and key accounts (@lopp, @dergigi, @gladstein). Engage with threads — the community is surprisingly accessible to newcomers.',
              },
              {
                id: 'fc-nostr',
                term: 'Nostr',
                icon: '🔓',
                definition:
                  'Decentralized and censorship-resistant. Popular with Bitcoin developers and researchers. Uses a key-based identity — download a client like Primal or Damus to get started.',
              },
              {
                id: 'fc-telegram',
                term: 'Telegram',
                icon: '💬',
                definition:
                  'Fast-moving, real-time. Search for "Bitcoin [your country or city]." Quality varies — evaluate communities by the quality of discussion, not just the size.',
              },
              {
                id: 'fc-local',
                term: 'Local Meetups',
                icon: '📍',
                definition:
                  'In-person connections accelerate learning faster than any online community. Find events at Meetup.com, Bitcoin Magazine event listings, or through your local university Bitcoin club.',
              },
            ],
          },
        ],
      },
      {
        id: 'lesson-03-04',
        slug: 'events-and-conferences',
        title: 'Events and Conferences',
        duration: '8 min',
        icon: '🎪',
        description:
          'Bitcoin conferences are where cutting-edge research happens first. Here\'s how to follow and leverage them.',
        slides: [
          {
            type: 'content',
            id: 'slide-03-04-01',
            icon: '🌎',
            title: 'Major Bitcoin Events',
            body: "Bitcoin's conference calendar runs year-round. Bitcoin Conference (Miami) is the world's largest Bitcoin-only event — thousands of developers, researchers, and community leaders. Bitcoin Amsterdam is a major European event. In Africa: Bitcoin Ekasi (South Africa), Bitcoin Lagos (Nigeria), and the Africa Bitcoin Conference (Ghana) have become important venues. Attending — even watching streams or recorded talks — accelerates your research dramatically.",
          },
          {
            type: 'content',
            id: 'slide-03-04-02',
            icon: '📹',
            title: 'Why Events Deepen Your Research',
            body: "Conference talks are often where cutting-edge Bitcoin research appears before it's published anywhere. Developers explain proposals in plain language. Researchers share early findings. You can watch years of archived talks for free on YouTube — search 'Bitcoin Conference [year]' or 'Bitcoin talk [topic].' One talk per week from the archives is one of the fastest ways to build research depth.",
          },
          {
            type: 'quiz',
            id: 'slide-03-quiz',
            title: 'Module 3 Quiz',
            questions: [
              {
                id: 'q3-1',
                question: 'What does "not your keys, not your coins" mean?',
                options: [
                  'You should encrypt your Bitcoin with special keys',
                  'If someone else holds your private keys (like an exchange), they control your Bitcoin',
                  'You need physical keys to access Bitcoin ATMs',
                  'Bitcoin wallets require two sets of keys to open',
                ],
                correctIndex: 1,
                explanation: 'If you leave your Bitcoin on an exchange, the exchange holds the private keys — meaning they control the Bitcoin, not you. Self-custody means holding your own keys.',
              },
              {
                id: 'q3-2',
                question: 'What is the Lightning Network best described as?',
                options: [
                  'A faster version of the Bitcoin blockchain',
                  'A payment channel network built on top of Bitcoin for fast, cheap transactions',
                  'A competing cryptocurrency',
                  'A hardware wallet brand',
                ],
                correctIndex: 1,
                explanation: 'Lightning is a Layer 2 network built on top of Bitcoin. It enables near-instant, nearly-free payments by processing transactions off-chain and settling to the Bitcoin blockchain.',
              },
              {
                id: 'q3-3',
                question: 'Which non-profit specifically focuses on Bitcoin education and development in Africa and the Global South?',
                options: ['OpenSats', 'HRF', 'Btrust Builders', 'Bitcoin Foundation'],
                correctIndex: 2,
                explanation: 'Btrust Builders, backed by Jack Dorsey, specifically focuses on Bitcoin education and development in Africa and the Global South.',
              },
            ],
          },
          {
            type: 'assignment',
            id: 'slide-03-assign',
            title: 'Module 3 Assignment',
            description:
              'Pick one organization from the Bitcoin ecosystem and research what they actually do.',
            steps: [
              'Choose one organization: HRF, OpenSats, Btrust Builders, Strike, River Financial, or Bitcoin Ekasi',
              'Visit their website and read their "About" or mission page',
              'Search for their name on Twitter/X and read recent posts',
              'Find one specific project or grant they have funded or executed recently',
              'Write a short paragraph: What do they do? Who are they for? Why do they exist?',
            ],
            deliverable:
              'One paragraph (150–250 words) about your chosen organization. Include one specific example of their recent work.',
          },
        ],
      },
    ],
  },

  {
    id: 'module-04',
    slug: 'finding-and-evaluating-bitcoin-information',
    number: 4,
    title: 'Finding & Evaluating Bitcoin Information',
    subtitle: 'Research Skills',
    week: 4,
    difficulty: 'intermediate',
    xp: 175,
    duration: '60 min',
    description:
      'Know where to find reliable Bitcoin information, how to evaluate sources critically, spot misinformation, and read on-chain data.',
    objectives: [
      'Identify reliable Bitcoin news, research, and data sources',
      'Apply a source evaluation framework to any Bitcoin content',
      'Recognize common Bitcoin myths and scam patterns',
      'Read basic on-chain metrics using free tools',
    ],
    lessons: [
      {
        id: 'lesson-04-01',
        slug: 'where-to-find-reliable-information',
        title: 'Where to Find Reliable Information',
        duration: '12 min',
        icon: '🔍',
        description:
          'Not all Bitcoin sources are equal. Here\'s the research stack you need — and why each piece matters.',
        slides: [
          {
            type: 'flipcards',
            id: 'slide-04-01-01',
            title: 'Types of Bitcoin Sources',
            instruction: 'Click each card to understand what each type offers',
            cards: [
              {
                id: 'fc-news',
                term: 'News Sites',
                icon: '📰',
                definition:
                  'Breaking news and analysis. Treat with a researcher\'s skepticism — fast publishing sometimes means errors. Best for staying current, not for deep understanding.',
              },
              {
                id: 'fc-research',
                term: 'Research Papers',
                icon: '📄',
                definition:
                  'Primary sources with academic rigor. Bitcoin Optech newsletters, arxiv.org papers, and BitMEX Research are your best options here.',
              },
              {
                id: 'fc-onchain',
                term: 'On-Chain Data',
                icon: '⛓️',
                definition:
                  'Facts directly from the blockchain — can\'t be faked or manipulated. Mempool.space, Glassnode, and Clark Moody Dashboard are the go-to tools.',
              },
              {
                id: 'fc-podcasts',
                term: 'Podcasts & Newsletters',
                icon: '🎙️',
                definition:
                  'Long-form discussion — quality varies widely. Best for building understanding of nuanced topics. Requires critical evaluation of the host\'s perspective and incentives.',
              },
            ],
          },
          {
            type: 'content',
            id: 'slide-04-01-02',
            icon: '📰',
            title: 'Best Bitcoin News and Research Sources',
            body: "Not all Bitcoin media is equal. Bitcoin Magazine is the oldest and most Bitcoin-focused publication. The Block and Decrypt offer broader crypto coverage with good Bitcoin sections. Bitcoin Optech (bitcoinops.org) is essential for technical developments — written for developers but valuable for all researchers. Lopp.net/bitcoin-information is the most comprehensive curated learning list online. For academic research, arxiv.org and BitMEX Research host serious Bitcoin papers.",
            bullets: [
              'bitcoinmagazine.com — oldest, most Bitcoin-focused',
              'bitcoinops.org — technical newsletters, explained clearly',
              'lopp.net/bitcoin-information — the best curated list online',
              'arxiv.org — academic papers before formal publication',
            ],
          },
          {
            type: 'content',
            id: 'slide-04-01-03',
            icon: '📊',
            title: 'On-Chain Data Tools',
            body: "On-chain data tools let you read facts directly from the Bitcoin network — no journalist, no analyst, just raw data. Mempool.space shows live transaction activity, fees, and block times. Glassnode provides advanced analytics on holder behavior and market cycles (free tier available). Clark Moody's Dashboard aggregates key Bitcoin metrics in one place. These tools let you verify claims rather than taking anyone's word for it.",
            highlight: 'Mempool.space is free, open-source, and self-hostable. It\'s the first place to check for any on-chain question.',
          },
          {
            type: 'content',
            id: 'slide-04-01-04',
            icon: '🎙️',
            title: 'Podcasts and Newsletters Worth Your Time',
            body: 'Long-form audio and newsletters are where much of the best Bitcoin thinking happens. "What Bitcoin Did" by Peter McCormack covers economics, culture, and politics accessibly. "Stephan Livera Podcast" goes deep on technical and economic topics. "Bitcoin Audible" reads key Bitcoin articles aloud — perfect for commuting. Newsletters: Marty\'s Bent (daily, short), Bitcoin Optech (weekly technical), The Bitcoin Layer by Nik Bhatia for macro context.',
          },
        ],
      },
      {
        id: 'lesson-04-02',
        slug: 'how-to-evaluate-a-source',
        title: 'How to Evaluate a Source',
        duration: '11 min',
        icon: '🧪',
        description:
          'A practical framework for deciding whether a Bitcoin source is trustworthy — and how to spot the red flags.',
        slides: [
          {
            type: 'content',
            id: 'slide-04-02-01',
            icon: '🔎',
            title: 'The SIFT Method',
            body: "Borrowed from media literacy education, SIFT works perfectly for Bitcoin research. Stop: pause before sharing or believing anything — resist the reflex to react immediately. Investigate the source: who wrote this and why do they have an audience? Find better coverage: is this claim reported elsewhere by independent sources? Trace claims: find the original primary source that the article is citing.",
            highlight: 'The SIFT method takes 2 minutes per article and will save you from spreading misinformation.',
          },
          {
            type: 'flipcards',
            id: 'slide-04-02-02',
            title: 'Red Flags in Bitcoin Content',
            instruction: 'Click each card to understand the warning sign',
            cards: [
              {
                id: 'rf-anon',
                term: 'Anonymous Author',
                icon: '👤',
                definition:
                  'No named author, or an unverifiable identity with no track record. This alone doesn\'t disqualify content — Satoshi was anonymous — but it warrants extra scrutiny.',
              },
              {
                id: 'rf-nosrc',
                term: 'No Sources',
                icon: '🚫',
                definition:
                  'Claims presented as facts without citations or verifiable data. Good Bitcoin research always points to where you can verify the claim yourself.',
              },
              {
                id: 'rf-buy',
                term: 'Asks You to Buy',
                icon: '💸',
                definition:
                  'Content that promotes a specific investment or product without disclosing a financial interest. Always ask: what does the author gain if you follow this advice?',
              },
              {
                id: 'rf-nodate',
                term: 'No Publication Date',
                icon: '📅',
                definition:
                  'Undated content could be years old. Bitcoin moves fast — information from 2020 might be completely wrong today. Always check when something was written.',
              },
            ],
          },
          {
            type: 'content',
            id: 'slide-04-02-03',
            icon: '📋',
            title: 'News vs Opinion vs Research',
            body: "Understanding content type is critical. News reports facts: who, what, when, where. Opinion argues a position: the author's view, not objective fact. Research analyzes data to answer a question: should include methodology and sources. Press releases are paid promotion from a company or project. Many Bitcoin articles blend these types without labeling them clearly. Ask yourself: what type of content is this, and is it labeled accurately?",
          },
          {
            type: 'content',
            id: 'slide-04-02-04',
            icon: '✅',
            title: 'Your Source Evaluation Checklist',
            body: 'Before trusting or sharing any Bitcoin source, run through these questions.',
            bullets: [
              'Is the author named? Do they have a verifiable track record?',
              'Is there a clear publication date?',
              'Are claims backed by citations you can verify?',
              'Is this clearly labeled as news, opinion, or research?',
              'Does the source or author have a known financial interest?',
              'What would a thoughtful critic of this piece say?',
              'Can I verify the key claim using on-chain data or a primary source?',
            ],
          },
        ],
      },
      {
        id: 'lesson-04-03',
        slug: 'spotting-misinformation-and-scams',
        title: 'Spotting Misinformation & Scams',
        duration: '11 min',
        icon: '🚨',
        description:
          'Bitcoin attracts more misinformation than almost any other topic. Here\'s how to recognize it and protect yourself.',
        slides: [
          {
            type: 'content',
            id: 'slide-04-03-01',
            icon: '🔬',
            title: 'Common Bitcoin Myths Debunked',
            body: "Three myths you'll encounter constantly. 'Bitcoin has no real value' — it solves real problems (censorship-resistant storage, permissionless transfer, fixed supply) that millions value highly. 'Bitcoin is only for criminals' — research shows criminal use is under 1% of transactions, far less than cash. 'Bitcoin uses too much energy' — this misunderstands what the energy buys: decentralized, censorship-resistant monetary security that cannot be achieved any other way.",
          },
          {
            type: 'flipcards',
            id: 'slide-04-03-02',
            title: 'Common Bitcoin Scams',
            instruction: 'Know these — they target Bitcoin beginners specifically',
            cards: [
              {
                id: 'sc-give',
                term: 'Fake Giveaways',
                icon: '🎁',
                definition:
                  '"Send 1 BTC, get 2 back." This scam has stolen millions. No celebrity — not Elon Musk, not any Bitcoin developer — has ever run a legitimate cryptocurrency giveaway. If you see it, it\'s a scam.',
              },
              {
                id: 'sc-rug',
                term: 'Rug Pulls',
                icon: '🏃',
                definition:
                  'New crypto projects raise money then disappear. This predominantly affects altcoins — projects with anonymous teams and no track record. Bitcoin itself cannot be "rug pulled" but projects built around Bitcoin can be scams.',
              },
              {
                id: 'sc-imp',
                term: 'Impersonators',
                icon: '🎭',
                definition:
                  'Scammers impersonate Bitcoin developers, influencers, or exchanges in DMs. Rule: no legitimate Bitcoin person will ever DM you first to offer investment advice or request Bitcoin.',
              },
              {
                id: 'sc-ponzi',
                term: 'Ponzi Schemes',
                icon: '🔺',
                definition:
                  'Returns paid from new investors\' money — not real profits. Requires constant new money to survive. Always collapses. Red flags: guaranteed returns, referral bonuses, complex structures you can\'t understand.',
              },
            ],
          },
          {
            type: 'content',
            id: 'slide-04-03-03',
            icon: '✔️',
            title: 'How to Fact-Check a Claim',
            body: 'A simple fact-checking workflow for Bitcoin claims.',
            bullets: [
              'Isolate the specific claim from surrounding context',
              'Ask: can this be verified with on-chain data? (mempool.space, glassnode)',
              'Trace the claim back to its original source',
              'Search "[claim] + debunked" or "[claim] + wrong" to find critics',
              "State your level of confidence — it's okay to say 'I can't verify this'",
            ],
          },
          {
            type: 'content',
            id: 'slide-04-03-04',
            icon: '⚠️',
            title: 'Why Altcoin Projects Spread Misinformation',
            body: 'Many altcoin projects actively spread misinformation about Bitcoin to promote their own tokens. The incentive is clear: if Bitcoin is seen as flawed or outdated, people might buy their token instead. Watch for claims that Bitcoin is "too slow," "too expensive," or "outdated technology" — these often come from projects competing for the same market. Learning to ask "who benefits from this claim?" is an essential research skill.',
          },
        ],
      },
      {
        id: 'lesson-04-04',
        slug: 'reading-on-chain-data',
        title: 'Reading On-Chain Data',
        duration: '12 min',
        icon: '📊',
        description:
          'On-chain data is your access to ground truth — facts directly from the Bitcoin network that no one can fake.',
        slides: [
          {
            type: 'content',
            id: 'slide-04-04-01',
            icon: '🌐',
            title: 'What Is On-Chain Data?',
            body: "On-chain data is information recorded directly on the Bitcoin blockchain — public, immutable, and verifiable without trusting anyone. Every transaction, address, and block is readable by anyone with an internet connection. This gives Bitcoin researchers a unique advantage: you can verify what's actually happening, not just what's reported. It's like having access to every bank's transaction logs — in real time, globally.",
          },
          {
            type: 'flipcards',
            id: 'slide-04-04-02',
            title: 'Key On-Chain Metrics',
            instruction: 'Click each metric to understand what it tells you',
            cards: [
              {
                id: 'oc-hash',
                term: 'Hash Rate',
                icon: '⚡',
                definition:
                  'Total computing power securing the Bitcoin network. Higher hash rate = more secure network and more miners competing. At all-time highs, the network is harder to attack than ever.',
              },
              {
                id: 'oc-addr',
                term: 'Active Addresses',
                icon: '👤',
                definition:
                  'Unique addresses that sent or received Bitcoin in a given period. A proxy for user activity. Rising over time suggests growing adoption.',
              },
              {
                id: 'oc-vol',
                term: 'Transaction Volume',
                icon: '💰',
                definition:
                  'Total value transferred on-chain in a period. Useful for measuring economic activity on the Bitcoin network, especially compared to other payment systems.',
              },
              {
                id: 'oc-mem',
                term: 'Mempool Size',
                icon: '⏳',
                definition:
                  'Number of transactions waiting to be confirmed. Rises when demand for block space exceeds supply. A full mempool drives fees up as users compete for priority.',
              },
            ],
          },
          {
            type: 'content',
            id: 'slide-04-04-03',
            icon: '🖥️',
            title: 'How to Use Mempool.space',
            body: "Mempool.space is your gateway to on-chain data — free, open-source, and no sign-up required. The main view shows current mempool activity and recommended fees. The block explorer lets you look up any transaction, address, or block by pasting it into the search bar. The 'Mining' section shows recent blocks and which mining pools found them. The 'Lightning' section shows Lightning Network statistics.",
            highlight: 'Try it now: go to mempool.space and look up any Bitcoin address. You\'ll see its full transaction history — all public.',
          },
          {
            type: 'content',
            id: 'slide-04-04-04',
            icon: '📈',
            title: 'Reading Charts Without Becoming a Trader',
            body: "Bitcoin research doesn't require being a trader. The key distinction: on-chain fundamentals (what the network is actually doing) vs. price speculation (what people think it's worth today). When reading charts, focus on long-term trends rather than short-term noise. Hash rate, transaction volume, and active addresses tell you about Bitcoin's actual health and use. Price tells you about market sentiment — useful context, but not the whole story.",
          },
          {
            type: 'quiz',
            id: 'slide-04-quiz',
            title: 'Module 4 Quiz',
            questions: [
              {
                id: 'q4-1',
                question: 'What does the SIFT method stand for?',
                options: [
                  'Search, Investigate, Filter, Trust',
                  'Stop, Investigate the source, Find better coverage, Trace claims',
                  'Source, Identify, Fact-check, Trust',
                  'Scan, Interpret, Follow, Test',
                ],
                correctIndex: 1,
                explanation: 'SIFT: Stop (pause before reacting), Investigate the source, Find better coverage, Trace claims to their origin. It\'s a practical media literacy framework adapted for Bitcoin research.',
              },
              {
                id: 'q4-2',
                question: 'What does the hash rate measure?',
                options: [
                  'The number of Bitcoin transactions per second',
                  'The total computing power securing the Bitcoin network',
                  'How fast Bitcoin prices are changing',
                  'The number of active wallets',
                ],
                correctIndex: 1,
                explanation: 'Hash rate is the total computing power of all miners on the Bitcoin network. Higher hash rate means more security and makes a 51% attack more expensive and difficult.',
              },
              {
                id: 'q4-3',
                question: 'Which statement about Bitcoin\'s energy use is most accurate?',
                options: [
                  'Bitcoin wastes energy with no benefit',
                  'Bitcoin uses less energy than all other payment systems',
                  'Bitcoin\'s energy expenditure is what provides its security and censorship resistance',
                  'Bitcoin will stop using energy when all 21 million are mined',
                ],
                correctIndex: 2,
                explanation: 'Bitcoin\'s energy use is the security. Physical energy expenditure creates a real-world barrier to attack that cannot be bypassed with software alone.',
              },
              {
                id: 'q4-4',
                question: 'Why do altcoin projects sometimes spread negative information about Bitcoin?',
                options: [
                  'They are trying to help Bitcoin improve',
                  'If Bitcoin appears flawed, people might buy their token instead',
                  'Altcoin projects are required to compare themselves to Bitcoin',
                  'They are protecting consumers from Bitcoin scams',
                ],
                correctIndex: 1,
                explanation: 'Many altcoin projects compete directly with Bitcoin for investor attention and capital. Spreading doubt about Bitcoin serves their financial interest. Always ask "who benefits from this claim?"',
              },
            ],
          },
          {
            type: 'assignment',
            id: 'slide-04-assign',
            title: 'Module 4 Assignment',
            description:
              'Find a Bitcoin article making a major claim and evaluate it using your new research skills.',
            steps: [
              'Find one article that makes a significant claim about Bitcoin (from any news source)',
              'Apply the SIFT method: Who wrote it? What is their track record? Can you find the same claim elsewhere?',
              'Identify whether it is news, opinion, research, or a press release',
              'Check for red flags from the checklist (no date, no sources, anonymous author, etc.)',
              'Try to verify or refute the central claim using on-chain data or a primary source',
              'Write your evaluation: Is the article trustworthy? Why or why not?',
            ],
            deliverable:
              'Link to the article + 1-paragraph evaluation answering: Who wrote it? Is it news or opinion? Can you verify the main claim? Is it trustworthy?',
          },
        ],
      },
    ],
  },

  {
    id: 'module-05',
    slug: 'how-to-do-bitcoin-research',
    number: 5,
    title: 'How to Do Bitcoin Research',
    subtitle: 'Doing the Work',
    week: 5,
    difficulty: 'intermediate',
    xp: 200,
    duration: '65 min',
    description:
      'Build a personal research workflow you can reuse for any Bitcoin topic — from choosing your question to publishing your findings.',
    objectives: [
      'Choose a specific, answerable Bitcoin research question',
      'Apply a 5-step research workflow to any topic',
      'Organize notes and sources effectively',
      'Write and share research in plain language',
      'Use AI tools responsibly in research',
    ],
    lessons: [
      {
        id: 'lesson-05-01',
        slug: 'choosing-your-research-topic',
        title: 'Choosing Your Research Topic',
        duration: '10 min',
        icon: '🎯',
        description:
          'The quality of your research depends heavily on the quality of your question. Here\'s how to choose a specific, answerable topic.',
        slides: [
          {
            type: 'content',
            id: 'slide-05-01-01',
            icon: '❓',
            title: 'What Makes a Good Research Question?',
            body: "A good Bitcoin research question has three qualities. Specific: not 'how does Bitcoin work?' but 'how does the Lightning Network affect payment adoption in sub-Saharan Africa?' Answerable: there must be data or arguments you can actually find and evaluate. Interesting: genuine curiosity produces better research — you'll push through confusion because you actually want to know.",
            highlight: "Starting with 'I wonder why...' or 'I want to understand...' usually leads to better questions than starting with a topic.",
          },
          {
            type: 'content',
            id: 'slide-05-01-02',
            icon: '🔭',
            title: 'Narrowing Your Focus',
            body: "Most first-time researchers start too broad. 'Bitcoin and the economy' is a topic — not a research question. Try this: write down your broad topic, then ask 'what specifically about this?' five times in a row. By the fifth iteration, you usually have a specific, manageable research question.",
            bullets: [
              'Too broad: "Bitcoin adoption in Africa"',
              'Better: "How is Bitcoin used for remittances in Nigeria?"',
              'Best: "How do Bitcoin remittance fees compare to Western Union for Nigeria-to-UK transfers in 2024?"',
            ],
          },
          {
            type: 'content',
            id: 'slide-05-01-03',
            icon: '💡',
            title: 'Example Research Topics',
            body: 'Need inspiration? These are specific, researachable Bitcoin questions.',
            bullets: [
              'How do Bitcoin ATM fees compare to traditional remittance services?',
              'What is the environmental impact of Bitcoin mining, and how does the energy mix affect the analysis?',
              'How does Bitcoin adoption correlate with inflation rates in emerging markets?',
              'What happened to the Lightning Network\'s capacity during the 2024 halving?',
              'How does Bitcoin self-custody compare to exchange custody in terms of security incidents?',
              'What role did Bitcoin play in financial access during Nigerian currency crises?',
            ],
          },
        ],
      },
      {
        id: 'lesson-05-02',
        slug: 'the-research-workflow',
        title: 'The Research Workflow',
        duration: '13 min',
        icon: '🔄',
        description:
          'A practical 5-step workflow you can apply to any Bitcoin research topic.',
        slides: [
          {
            type: 'content',
            id: 'slide-05-02-01',
            icon: '📝',
            title: 'Step 1: Start With What You Know',
            body: "Before searching for anything, spend 10 minutes writing down everything you already know — or think you know — about your topic. This shows you where your knowledge gaps are (which tells you what to search for), and gives you a baseline to test against what you find. You'll be surprised how much you've assumed without verifying. Researchers call this a 'knowledge audit.'",
          },
          {
            type: 'content',
            id: 'slide-05-02-02',
            icon: '🔍',
            title: 'Steps 2 & 3: Search and Note-Take',
            body: "Search for existing work on your topic: articles, academic papers, forum discussions, on-chain data, and podcast episodes. As you go, write a one-sentence summary of each source — don't just save links. Record the author, date, and key finding for every source. This practice feels slow at first but saves enormous time later when you're trying to remember where a specific claim came from.",
            highlight: 'A source log with 20 properly noted sources is more valuable than 200 unsorted bookmarks.',
          },
          {
            type: 'content',
            id: 'slide-05-02-03',
            icon: '🧩',
            title: 'Steps 4 & 5: Find Patterns and Form Your View',
            body: "After gathering sources, look for patterns: What do most sources agree on? What do they disagree about? Where are the gaps — questions that haven't been answered? What claims can be verified with on-chain data? Then form your own view based on the evidence. Research is not just summarizing what others say — it's synthesizing evidence and forming a reasoned position. 'Based on the evidence I found, I believe...' is where research lives.",
          },
          {
            type: 'content',
            id: 'slide-05-02-04',
            icon: '🔁',
            title: 'The Research Loop',
            body: "Research rarely goes in a straight line. You'll start with a question, find sources that raise new questions, adjust your focus, find more sources, and eventually reach a conclusion. This is the research loop — normal for every researcher at every level. Most good research involves 3–5 iterations before confidence. Allow yourself to be wrong at the start. The willingness to revise your views as you learn more is the most important quality of a good researcher.",
          },
        ],
      },
      {
        id: 'lesson-05-03',
        slug: 'note-taking-and-organizing',
        title: 'Note-Taking & Organizing',
        duration: '9 min',
        icon: '🗂️',
        description:
          'Good notes are what separate researchers who find patterns from those who just collect links.',
        slides: [
          {
            type: 'flipcards',
            id: 'slide-05-03-01',
            title: 'Note-Taking Tools',
            instruction: 'Click each card to understand the best use for each tool',
            cards: [
              {
                id: 'nt-gdocs',
                term: 'Google Docs',
                icon: '📄',
                definition:
                  'Simple, shareable, accessible everywhere. Great for beginners. Use one doc per research topic. Share easily for collaboration or feedback.',
              },
              {
                id: 'nt-notion',
                term: 'Notion',
                icon: '🗃️',
                definition:
                  'More structured — databases, tags, and templates for organized research. Build a source database with columns for author, date, key finding, and credibility score.',
              },
              {
                id: 'nt-obsidian',
                term: 'Obsidian',
                icon: '🔮',
                definition:
                  'Linked notes — see connections between ideas visually. Great for advanced researchers building a personal knowledge base. Stores notes locally — no cloud dependency.',
              },
              {
                id: 'nt-notebook',
                term: 'Physical Notebook',
                icon: '📓',
                definition:
                  "Never crashes, no distractions, no notifications. Many top researchers still use paper for first-pass notes, then digitize key findings. Don't dismiss it.",
              },
            ],
          },
          {
            type: 'content',
            id: 'slide-05-03-02',
            icon: '🧠',
            title: 'How to Summarize Effectively',
            body: "The Feynman Technique works brilliantly: after reading an article, close it and explain what you just read as if talking to a 12-year-old. If you can't, you haven't understood it yet — go back and re-read. When taking notes, write in your own words rather than copy-pasting quotes. Forced translation into your own language is how understanding happens. Quotes are evidence; your words are understanding.",
          },
          {
            type: 'content',
            id: 'slide-05-03-03',
            icon: '📎',
            title: 'Citation and Source Management',
            body: 'Track every source with at minimum: author name, article title, publication, date, and URL. If you cannot find these details, be suspicious of the source. When you share your research, providing sources lets readers verify your claims — which builds credibility. Minimum citation format: Author (Date). Title. Publication. URL — accessed [date].',
          },
        ],
      },
      {
        id: 'lesson-05-04',
        slug: 'writing-and-sharing',
        title: 'Writing & Sharing Your Research',
        duration: '10 min',
        icon: '✍️',
        description:
          'How to structure Bitcoin research clearly, write in plain language, and choose the right platform for your audience.',
        slides: [
          {
            type: 'content',
            id: 'slide-05-04-01',
            icon: '📐',
            title: 'Research Writing Structure',
            body: "Every good research piece follows the same basic structure. What is the question? State it clearly upfront. What did you find? Present your evidence and sources. What does it mean? Your analysis and conclusion. This structure works for a 1-page brief, a Twitter thread, a blog post, or a 10-page report. Don't bury your conclusion — state it early, then support it with evidence.",
          },
          {
            type: 'content',
            id: 'slide-05-04-02',
            icon: '📖',
            title: 'Writing in Plain Language',
            body: "Good Bitcoin research is accessible. Avoid jargon unless you define it. Replace technical terms with plain explanations for general audiences. Write as if explaining to a curious, smart friend who is not a Bitcoin expert. Read your writing out loud — if it sounds awkward, simplify it. The most respected Bitcoin researchers write for everyone, not just insiders. Complexity is not a signal of intelligence.",
          },
          {
            type: 'content',
            id: 'slide-05-04-03',
            icon: '🚀',
            title: 'Publishing and Sharing Your Work',
            body: 'Where you share depends on your audience and format.',
            bullets: [
              'Twitter/X threads — reach the most people quickly; good for distilled findings',
              'Substack or Mirror — best for long-form articles with a subscriber base',
              'Nostr — decentralized, popular with Bitcoin-native audiences',
              'LinkedIn — reaches professional and academic audiences',
              'GitHub — appropriate for data-heavy or technical research',
            ],
            highlight: 'Start small. A single thread sharing one finding is better than waiting for a perfect long-form piece.',
          },
        ],
      },
      {
        id: 'lesson-05-05',
        slug: 'using-ai-tools-responsibly',
        title: 'Using AI Tools Responsibly',
        duration: '10 min',
        icon: '🤖',
        description:
          'AI tools can accelerate your research — but they can also mislead you. Here\'s how to use them safely.',
        slides: [
          {
            type: 'content',
            id: 'slide-05-05-01',
            icon: '🤖',
            title: 'What AI Can and Cannot Do',
            body: "AI tools like Claude or ChatGPT can be genuinely useful research assistants — but they have fundamental limitations. AI generates plausible-sounding text based on patterns in training data. It doesn't 'know' things the way you do — it can't verify facts in real time, and it confidently produces incorrect information (called 'hallucinations'). Always treat AI output as a draft that needs verification, not a finished answer.",
            highlight: 'AI cannot access real-time data. Asking "what is Bitcoin\'s current price?" or "what happened in Bitcoin yesterday?" will produce unreliable answers.',
          },
          {
            type: 'flipcards',
            id: 'slide-05-05-02',
            title: 'Good vs Bad Uses of AI in Research',
            instruction: 'Click each card to understand when AI helps vs hurts',
            cards: [
              {
                id: 'ai-sum',
                term: 'Good: Summarizing',
                icon: '✅',
                definition:
                  "Paste a long article and ask for a summary — saves time. But always verify the summary captures the article's actual argument, not a hallucinated version of it.",
              },
              {
                id: 'ai-brain',
                term: 'Good: Brainstorming',
                icon: '✅',
                definition:
                  'Ask AI for 10 research questions about a topic to generate ideas you can then evaluate. Use it to discover angles you might have missed.',
              },
              {
                id: 'ai-fact',
                term: 'Bad: Treating as Fact',
                icon: '❌',
                definition:
                  "Asking 'What is Bitcoin's current hash rate?' or 'What are the most recent halving statistics?' — AI cannot access real-time data and will often fabricate plausible-sounding numbers.",
              },
              {
                id: 'ai-src',
                term: 'Bad: Source Generation',
                icon: '❌',
                definition:
                  'Asking AI to list academic sources or citations. It will often produce realistic-looking but completely fabricated citations. Always find sources yourself.',
              },
            ],
          },
          {
            type: 'content',
            id: 'slide-05-05-03',
            icon: '✔️',
            title: 'The Verification Workflow',
            body: 'A safe AI workflow for Bitcoin research.',
            bullets: [
              'Step 1: Ask AI to explain a concept or help outline a topic',
              'Step 2: Identify every specific claim or statistic in the response',
              'Step 3: Verify each claim using a primary source (on-chain data, original article, whitepaper)',
              'Step 4: Revise your understanding based on what you actually verified',
              'Step 5: Cite the primary source — not the AI — in your research',
            ],
          },
          {
            type: 'quiz',
            id: 'slide-05-quiz',
            title: 'Module 5 Quiz',
            questions: [
              {
                id: 'q5-1',
                question: 'Which of these is a well-formed Bitcoin research question?',
                options: [
                  'Bitcoin and the economy',
                  'Is Bitcoin good?',
                  'How do Bitcoin remittance fees compare to Western Union for Nigeria-to-UK transfers?',
                  'Everything about the Lightning Network',
                ],
                correctIndex: 2,
                explanation: 'A good research question is specific, answerable, and interesting. Option 3 has a specific comparison, a defined context (Nigeria-UK), and can be researched with real data.',
              },
              {
                id: 'q5-2',
                question: 'What is the Feynman Technique in the context of note-taking?',
                options: [
                  'Writing notes in multiple languages',
                  'Explaining what you just read in plain language as if to a 12-year-old',
                  'Recording audio notes instead of writing',
                  'Using diagrams instead of words',
                ],
                correctIndex: 1,
                explanation: "The Feynman Technique: after reading, close the source and explain the concept simply. If you can't, you haven't understood it — go back and re-read. It's one of the most effective learning methods.",
              },
              {
                id: 'q5-3',
                question: 'Why should you NOT ask AI to generate a list of research sources?',
                options: [
                  'AI does not know what Bitcoin is',
                  'AI cannot generate text quickly enough',
                  'AI often fabricates plausible-sounding but non-existent citations',
                  'AI sources are always too technical',
                ],
                correctIndex: 2,
                explanation: "AI 'hallucination' is especially dangerous with citations — AI will produce realistic-looking author names, publication titles, and dates for papers that don't exist. Always find sources yourself.",
              },
            ],
          },
          {
            type: 'assignment',
            id: 'slide-05-assign',
            title: 'Module 5 Assignment — Research Brief',
            description:
              'This assignment is the foundation of your final project. Choose a Bitcoin topic that genuinely interests you and write a one-page research brief.',
            steps: [
              'Choose a specific Bitcoin research question using the narrowing technique from Lesson 5.1',
              'Write down everything you already know about the topic (knowledge audit)',
              'Find and document at least 3 credible sources (with author, date, and one-sentence summary each)',
              'Identify your initial view or hypothesis based on what you\'ve found',
              'Note 2–3 questions your research has not yet answered',
            ],
            deliverable:
              'A one-page research brief: What is your question? Why does it matter? What do your 3 sources say? What is your initial view? What are you still unsure about?',
          },
        ],
      },
    ],
  },

  {
    id: 'module-06',
    slug: 'putting-it-all-together',
    number: 6,
    title: 'Putting It All Together',
    subtitle: 'Capstone',
    week: 6,
    difficulty: 'intermediate',
    xp: 250,
    duration: '60 min',
    description:
      'Review everything, build sustainable learning habits, explore opportunities in the Bitcoin ecosystem, and complete your final research project.',
    objectives: [
      'Identify and avoid common Bitcoin research mistakes',
      'Build a sustainable personal learning system',
      'Identify career and grant opportunities in Bitcoin research',
      'Complete and present original Bitcoin research',
    ],
    lessons: [
      {
        id: 'lesson-06-01',
        slug: 'review-and-common-mistakes',
        title: 'Review & Common Mistakes',
        duration: '12 min',
        icon: '🔎',
        description:
          'Every researcher makes the same mistakes. Knowing them in advance puts you years ahead.',
        slides: [
          {
            type: 'content',
            id: 'slide-06-01-01',
            icon: '⚠️',
            title: 'Common Bitcoin Research Mistakes',
            body: "Every researcher makes these mistakes — knowing them helps you avoid them.",
            bullets: [
              "Confirmation bias: only reading sources that confirm your prior view",
              "Source laziness: citing secondary sources (articles about articles) instead of tracing back to the primary",
              "Altcoin contamination: getting Bitcoin information from media with a vested interest in downplaying it",
              "Recency bias: treating short-term price movements as evidence of long-term trends",
              "Complexity addiction: assuming that harder-to-understand means more trustworthy",
              "AI over-reliance: treating AI-generated content as verified fact",
            ],
          },
          {
            type: 'content',
            id: 'slide-06-01-02',
            icon: '📈',
            title: 'How to Keep Learning After This Course',
            body: "The Bitcoin rabbit hole is genuinely endless. The best researchers develop sustainable habits rather than trying to read everything. Pick one source to read daily (Marty's Bent is short and reliable). Listen to one podcast per week. Follow 15–20 high-quality accounts. Review your notes monthly. And most importantly: keep asking questions. Curiosity is the engine of research — and you can't run out of questions in this space.",
          },
          {
            type: 'content',
            id: 'slide-06-01-03',
            icon: '⚙️',
            title: 'Building a Learning System',
            body: "A sustainable learning system has three parts. Input: regular, curated sources you consume (one newsletter, one podcast, one data tool). Processing: a place to take notes and make connections (Notion, Obsidian, or a notebook). Output: a regular practice of sharing what you learn (a monthly thread, a blog post, even conversations with friends). Input without output creates a hoarder. Output without input creates a pundit. Both together make a researcher.",
          },
        ],
      },
      {
        id: 'lesson-06-02',
        slug: 'staying-current-in-bitcoin',
        title: 'Staying Current in Bitcoin',
        duration: '10 min',
        icon: '📡',
        description:
          'Bitcoin moves fast. Here\'s how to stay informed without feeling overwhelmed.',
        slides: [
          {
            type: 'content',
            id: 'slide-06-02-01',
            icon: '📰',
            title: 'Building a Reading Habit',
            body: "The key to staying current is consistency over intensity. 15 minutes a day beats 5 hours on Sunday. A daily habit of one short newsletter — try Marty's Bent, Bitcoin Optech, or The Bitcoin Layer — will keep you more current than sporadic deep dives. When a major event happens (a halving, a major protocol update, a policy development), do a focused deep dive. The rest of the time, maintain a steady reading rhythm.",
          },
          {
            type: 'content',
            id: 'slide-06-02-02',
            icon: '👥',
            title: 'Who to Follow',
            body: "Curating your information sources is one of the highest-leverage things you can do as a researcher. Start with these accounts and expand from there.",
            bullets: [
              "@lopp (Jameson Lopp) — Bitcoin security, privacy, and infrastructure",
              "@dergigi (Gigi) — Bitcoin philosophy, writing, and deep dives",
              "@gladstein (Alex Gladstein) — Bitcoin and human rights globally",
              "@aantonop (Andreas Antonopoulos) — education and technical explanation",
              "@NVK (Rodolfo Novak) — hardware security and Bitcoin philosophy",
              "Also: add local African Bitcoin researchers as you discover them",
            ],
          },
          {
            type: 'flipcards',
            id: 'slide-06-02-03',
            title: 'Your Bitcoin Research Stack',
            instruction: 'Click each frequency to build your sustainable reading habit',
            cards: [
              {
                id: 'rs-daily',
                term: 'Daily',
                icon: '☀️',
                definition:
                  "One short newsletter. Marty's Bent (short, opinionated), Bitcoin Optech (technical, weekly), or Unchained Capital's blog. ~5-10 minutes of focused reading.",
              },
              {
                id: 'rs-weekly',
                term: 'Weekly',
                icon: '📅',
                definition:
                  "One long-form podcast or conference talk. What Bitcoin Did, Stephan Livera Podcast, or one Bitcoin Conference talk from the YouTube archive. ~1 hour.",
              },
              {
                id: 'rs-monthly',
                term: 'Monthly',
                icon: '🗓️',
                definition:
                  "One on-chain data deep dive. Spend an hour on Mempool.space and Glassnode's free tier — look at hash rate, active addresses, and mempool trends over the past month.",
              },
              {
                id: 'rs-quarterly',
                term: 'Quarterly',
                icon: '📊',
                definition:
                  "One academic or long-form research piece. Check arxiv.org for new Bitcoin papers, BitMEX Research, or a major Bitcoin Optech special edition. ~2-3 hours.",
              },
            ],
          },
        ],
      },
      {
        id: 'lesson-06-03',
        slug: 'opportunities-in-bitcoin-research',
        title: 'Opportunities in Bitcoin Research',
        duration: '12 min',
        icon: '🚀',
        description:
          'Bitcoin research is a real career path. Here\'s how to find opportunities, apply for grants, and build a portfolio that gets noticed.',
        slides: [
          {
            type: 'content',
            id: 'slide-06-03-01',
            icon: '💼',
            title: 'Non-Technical Roles in Bitcoin',
            body: "You don't need to code to have a career in Bitcoin. The ecosystem needs researchers, writers, educators, community managers, policy advocates, translators, event organizers, and business developers. Bitcoin companies — River Financial, Casa, Swan Bitcoin, Unchained Capital, Strike — employ non-technical staff. The demand for quality Bitcoin education content in African languages and local contexts is enormous and largely unmet.",
          },
          {
            type: 'content',
            id: 'slide-06-03-02',
            icon: '💰',
            title: 'Research Grants',
            body: "Several organizations fund independent Bitcoin research. The Human Rights Foundation (HRF) Bitcoin Development Fund provides grants for work at the intersection of Bitcoin and human rights — including research and education. OpenSats funds open-source Bitcoin education and development. Btrust Builders funds Bitcoin education and development specifically in Africa and the Global South. Past grant recipients have included early-career researchers who produced original, quality work.",
            highlight: 'HRF and OpenSats have separate grant programs for education and research. Applications are open year-round. Quality of work matters more than credentials.',
          },
          {
            type: 'content',
            id: 'slide-06-03-03',
            icon: '📁',
            title: 'Building Your Public Portfolio',
            body: "Your research portfolio is your credential in the Bitcoin world. It doesn't need to be a formal website — a consistent presence on Twitter/X or Nostr, a Substack newsletter, or a well-organized Notion page can serve as a portfolio. Document your learning publicly. Share your research briefs. Engage with other researchers' work thoughtfully. In an open-source community, your public contributions are your resume.",
          },
          {
            type: 'content',
            id: 'slide-06-03-04',
            icon: '⭐',
            title: 'Getting Noticed in the Bitcoin Space',
            body: "The Bitcoin world is small and meritocratic — quality work gets noticed. Focus on specificity: write about a narrow topic you know well rather than broad overviews that exist everywhere. Be consistent: one original research piece per month over a year outperforms a single brilliant one-off. Engage genuinely: thoughtful comments on others' work matter more than broadcasting your own. Go to events: in person or virtual, conferences accelerate everything.",
          },
          {
            type: 'assignment',
            id: 'slide-06-final',
            title: 'Final Project',
            description:
              'Present your research to the community. Build on the research brief from Module 5.',
            steps: [
              'Choose your format: written report, slide deck, Twitter/Nostr thread, or short video',
              'Structure your piece: What was your question? What did you find? What does it mean?',
              'Include at least 3 cited sources (author, title, date, URL)',
              'Write a clear conclusion: what is your informed view on this topic?',
              'Prepare to present or share for 5–10 minutes',
            ],
            deliverable:
              'A completed research piece in any format. The goal: demonstrate that you can independently research a Bitcoin topic and communicate your findings clearly. Peer feedback will be provided.',
          },
        ],
      },
    ],
  },
]

export function getModule(slug: string): Module | undefined {
  return curriculum.find((m) => m.slug === slug)
}

export function getLesson(moduleSlug: string, lessonSlug: string) {
  const module = getModule(moduleSlug)
  if (!module) return undefined
  const lesson = module.lessons.find((l) => l.slug === lessonSlug)
  return { module, lesson }
}
