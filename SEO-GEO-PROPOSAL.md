# Search strategy — findings and proposal

Prepared September 2026. Search demand figures come from Google Ads data via DataForSEO.
Nothing in this document has been applied to the website except the French page in this
pull request. It is here for you to approve, change or reject.

---

## 1. What the data says

### The site was built around a phrase nobody searches

| Phrase | Searches per month |
|---|---|
| `ที่ดินขาย แก่งกระจาน` (was in the page title) | **0** |
| `land for sale kaeng krachan` | **0** |
| `land for sale phetchaburi` | **0** |

"Kaeng Krachan" is how you think of the project, and it is correct. But almost nobody
types it into Google. People search by the nearest place they already know.

### They search for Hua Hin

| Phrase | In Thailand | From the UK |
|---|---|---|
| property for sale thailand | 210 | **2,900** |
| hua hin property for sale | **880** | 590 |
| land for sale hua hin | 210 | — |
| retire in thailand | — | 390 |

### Your buyers are mostly not in Thailand

Searches for "property for sale thailand" are roughly **fourteen times more common from the
UK** than from inside Thailand. France adds around 1,500 a month across
"acheter maison thaïlande", "immobilier thaïlande" and "retraite thaïlande".

You already answer enquiries in French and English. That is an advantage very few
Thai land sellers have.

### The market is small, and that is worth saying plainly

Total search demand for land in this area is a few hundred a month, not thousands.
Search will be a **small, high-quality channel** — a handful of serious enquiries — not a
source of large traffic. Anyone promising otherwise is selling something.

---

## 2. What is already done

- Analytics and Google Search Console are installed and connected, so from now on we can
  see which searches actually bring people to the site.
- The site told Google its preferred address was `www.natural-healthy-village.com`, but
  that address redirects to the non-www one. Google was being pointed at a dead end.
  Fixed.
- The home page was 2.6 MB because the photographs were embedded inside the page code.
  It is now 50 KB and loads in well under a second. This matters: slow pages rank worse
  and lose mobile visitors.
- Phone and email clicks are now recorded, so we can count real enquiries.

---

## 3. Proposed next steps

### A. A French page — included in this pull request

`/fr/` — a French version covering the project, the plots and prices, the 30-year lease
for foreign buyers, the location and the infrastructure. It contains **no new claims**:
every fact is taken from the existing English pages and the knowledge base.

Please check the French reads the way you would say it. It is your voice, not ours.

### B. Correct the distance figures

The site says **"40 km to Hua Hin and Cha-am"**. Measured from the project's own Google
Maps coordinates, the straight-line distance is **45.7 km to Hua Hin** and **29.4 km to
Cha-am** — so one figure cannot be right for both, and a 40 km road distance to Hua Hin is
not possible if the straight line is already 45.7 km.

We have left the wording alone. Please tell us the correct figures and we will update them
everywhere at once.

### C. Fix the Google Maps listing category

The project's Google listing is currently categorised as **"lodging"** — accommodation.
This tells Google, and every AI assistant that reads Google, that you rent rooms. You sell
land. This is probably the single most damaging wrong signal on the internet about the
project, and it is free to fix in Google Business Profile.

### D. Be where buyers already are

For Thai searches, **four of the top ten Google results are Facebook groups**. For English
searches, all ten are property portals — Fazwaz, DDProperty, Thailand-Property. A single
project site will not outrank them, and trying is wasted effort.

The better move is to be listed *on* those portals and active in those groups, and let the
website be the place people land once they are interested.

### E. Questions, not adjectives

AI assistants increasingly answer property questions directly. They quote pages that
answer a specific question in plain, checkable sentences — prices, distances, legal
conditions. The knowledge base already does this well; it is the strongest SEO asset on
the site. More articles in that style, answering real buyer questions, is the best
long-term investment.

---

## 4. What we recommend against

- Chasing "land for sale thailand" and similar broad terms. The portals own them.
- Adding keywords to pages for their own sake. It reads badly and no longer works.
- Any promise that search will deliver large numbers of buyers. It will not, here.

---

# Round 2 — deeper research, September 2026

The first round asked "what do people search for near Kaeng Krachan?" and found the
answer was "almost nothing". This round asked a better question: **where in the world are
people searching for what you actually sell, and how hard is it to reach them?**

"Difficulty" below is Google keyword difficulty, 0–100. Under about 20, a small
well-written site can realistically rank. Over 60, you are fighting portals and
would lose.

## The three markets, by size

| Market | Roughly, searches/month | Difficulty | You can serve it today? |
|---|---|---|---|
| **Germany** | 7,000+ | **0–6** | No — no German speaker |
| **United Kingdom** | 4,000 | 0–21 | Yes |
| **France** | 2,500 | **0–3** | **Yes — Philippe is French** |
| Sweden | 560 | — | No |
| Thailand | small, and mostly land-office admin searches | — | Yes, via Thanawat |

## Germany is the biggest prize and we cannot currently take it

| German keyword | Searches/month | Difficulty |
|---|---|---|
| haus kaufen thailand | **2,400** | **0** |
| haus in thailand kaufen | 1,300 | **0** |
| auswandern thailand | 880 | 5 |
| immobilien thailand | 880 | — |
| auswandern nach thailand als rentner | 320 | **0** |

Difficulty zero at 2,400 searches a month is extraordinary — it means nobody is
competing properly for it. German retirees are also the classic Hua Hin buyer.

The problem is honest and simple: **nobody at Natural Healthy Village speaks German.**
Sending German traffic to a page that can only answer in English or French wastes it.
This is a business decision, not a technical one:

- Do nothing, and leave it.
- Publish a German page that states plainly that enquiries are handled in English —
  many German buyers in Thailand operate in English, but some will leave.
- Find a German-speaking contact, even part-time, and then build the page.

We recommend deciding this deliberately rather than by default.

## France is the best fit

Smaller than Germany, but **you already speak the language**, and the difficulty is
near zero:

| French keyword | Searches/month | Difficulty |
|---|---|---|
| acheter maison thaïlande | 720 | — |
| vivre en thaïlande | **590** | **0** |
| immobilier thaïlande | 390 | **3** |
| retraite thaïlande | 260 | — |
| partir vivre en thaïlande | 140 | **0** |
| achat immobilier thaïlande | 90 | **0** |

This pull request adds the second French page, a buying guide covering the legal
framework, the Chanote title and what to check before buying. It uses only facts already
published on the site.

## The retirement angle

People do not search "land for sale". They search for the life they want.

| English keyword | Searches/month | Difficulty |
|---|---|---|
| retire in thailand | 390 | **1** |
| retire in thailand from uk | 320 | **3** |
| how much to retire in thailand | 70 | **0** |
| can i retire in thailand | 50 | 6 |

One caution. "retirement visa thailand" gets 1,300 searches a month and looks tempting.
We recommend **not** writing about visa requirements. Immigration rules change, getting
them wrong harms readers, and the results are dominated by immigration lawyers for good
reason. Write about the things you actually know.

---

# Pages we would like Philippe to write

These are the highest-value pages we can identify, and they are ones **only you can
write honestly**. We can shape and publish them, but the substance has to be yours.
Short is fine — 400 to 600 words each.

### 1. "Vivre en Thaïlande, près de Hua Hin" (French)
Target: ~870 searches/month at difficulty 0.

Not a generic lifestyle article — there are thousands of those. What we want is what you
actually know after living there: what the area is genuinely like day to day, what the
seasons do, what is within driving distance, what surprised you, what you would warn a
French buyer about. Honest and specific beats polished and vague, both for readers and
for AI assistants, which increasingly quote first-hand detail.

Please do not include visa rules or cost-of-living figures unless you are confident
they are current.

### 2. "Retiring near Hua Hin" (English)
Target: ~830 searches/month at difficulty 0–3.

Same idea for the British and Commonwealth audience. What makes this area suitable, or
unsuitable, for someone retiring. Healthcare access, the drive to Bangkok, the community,
what the practicalities really are.

### 3. Correct the distance figures
See section 3B above. We still need the right numbers.

### 4. Decide on Germany
See above. A yes or no is enough for now.

---

# Round 3 — every market we could find

Decision taken: pursue all markets, with enquiries handled in English.

## The full map

| Market | Searches/month | Difficulty | Page |
|---|---|---|---|
| **English** — US 3,700, UK 4,000, AU 1,440, CA 550 | **~9,700** | 0–21 | **Already exists** |
| **German** — DE, AT 540, CH 520 | ~8,000 gross | **0–6** | Added, `/de/` |
| **French** — FR, BE 190, CH 180 | ~2,900 | **0–3** | Added, `/fr/` |
| Dutch | 1,400 | not measured | Not yet |
| Scandinavian — SE 560, NO 180, DK 150 | ~890 | not measured | Not yet |
| Spanish | 810 | not measured | Not yet |
| Polish | 710 | not measured | Not yet |
| Italian | 700 | not measured | Not yet |
| Finnish | 50 | — | Not worth it |
| Russian | no data | — | Google is not the main engine there |

**The single most important line in that table is the first one.** English is the
largest market by a distance, and the site already serves it. It simply was not
written for the terms those people type. That was corrected in an earlier change,
and it will do more than any new language page.

## An honest note on the German numbers

The headline German figure needs qualifying. The biggest German term is
**"haus kaufen thailand" — 2,400 a month — and it means "buy a finished house"**.
Natural Healthy Village sells land to build on. The land-specific terms are much
smaller:

| German term | Searches/month | Means |
|---|---|---|
| haus kaufen thailand | 2,400 | buy a finished house |
| immobilien thailand | 880 | property generally |
| immobilien thailand kaufen | 320 | buy property |
| **grundstück kaufen thailand** | **140** | **buy land — what we sell** |

So the honestly addressable German demand is roughly **1,400 a month**, not 8,000.
The new page can still pick up some of the "haus kaufen" traffic, because plenty of
those searchers end up building, but it says plainly in the first paragraph that we
sell plots and not finished houses. Some visitors will leave. That is the right
trade: a page that misleads to win a click loses the sale anyway, and Google
eventually notices.

The retiree angle is the stronger German opening, and all of it is difficulty 0:
"auswandern nach thailand als rentner" 320, "leben in thailand als rentner" 320,
"auswandern thailand" 880.

## The German page states the language limit

The page says, in the badge row and again at the contact section, that enquiries are
answered in English and French and not in German. Better to lose a visitor at the
door than to take an enquiry we cannot answer well.

## What we would do next, in order

1. **Dutch** (1,400/month) — the next largest after German.
2. **Spanish, Polish, Italian** (~700 each) — worth it once the pattern is proven.
3. **Scandinavian** — three small markets, one shared page each, lowest priority.

A caution worth stating plainly: a pile of thin translated pages is a well-known way
to get a site classified as a doorway network. Each language page should carry real
content, its own photographs, and honest local framing — as the French and German
ones do. We would rather ship four good pages than ten hollow ones.

---

# Round 4 — Dutch, Spanish and the Chinese question

## Dutch and Spanish are both worth having

| Language | Searches/month | Difficulty | Page |
|---|---|---|---|
| **Dutch** — Netherlands 1,400, Belgium 200 | **~1,600** | **0** | Added, `/nl/` |
| **Spanish** — Spain 810, Mexico 60, Argentina 50 | ~920 | **0** | Added, `/es/` |

Difficulty zero across both. Latin America turns out to be negligible for this
product, so the Spanish page is really a Spain page.

Two useful details. The Dutch term "huis kopen in thailand als buitenlander" —
buying a house in Thailand as a foreigner — gets 90 a month at difficulty 0 and
maps exactly onto the 30-year lease explanation. And the Spanish demand skews to
retirement: "vivir en tailandia jubilado" at 110 a month.

Both pages carry the same honest framing as the German one: the first section says
we sell plots and not finished houses, and the contact section says enquiries are
answered in English and French only.

## Chinese is smaller than it looks

Worth setting out plainly, because the intuition is that Chinese buyers are a large
force in Thai property — which is true, but not through Google.

| Market | Searches/month | Script |
|---|---|---|
| Taiwan | 500 | Traditional |
| Hong Kong | 120 | Traditional |
| Singapore | 40 | Simplified |
| Malaysia | 40 | Simplified |
| **Total** | **~700** | split across two scripts |

Mainland China uses Baidu, not Google, so Google data does not see it. What is left
is roughly 700 searches a month, mostly Taiwanese, and it would need **Traditional**
characters to serve the main part of it.

There is a second problem, and it matters more. Nobody connected to this project can
read the result. Every other language page here was written to be checked — the
French by Philippe, the German and Dutch and Spanish close enough to English and
French that errors are visible. Chinese copy would go live unverified on a site
selling multi-million-baht land. That cuts against the whole point of looking
credible.

Our recommendation is to skip Chinese unless a native speaker can review the page
before it ships. 700 searches a month is not worth the risk of looking careless to
the readers who do arrive.
