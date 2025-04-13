// Article type definition
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  category: string;
  author: string;
  date: string;
}

// Sample article content - this would typically come from an API
const articles: Article[] = [
  {
    id: 1,
    title: "The Renaissance of Print Media in a Digital World",
    excerpt:
      "As digital fatigue sets in, more readers are turning to tangible, print experiences. This growing trend marks a significant shift in how we consume information, with implications for publishers and content creators alike.",
    content: [
      "As digital fatigue sets in, more readers are turning to tangible, print experiences. This growing trend marks a significant shift in how we consume information, with implications for publishers and content creators alike. Experts suggest this isn't merely nostalgia, but a fundamental desire for a more focused, intentional relationship with media.",
      "The statistics are compelling: print book sales have increased by 8.9% year-over-year, while independent magazines are experiencing a revival not seen since the 1990s. Publishers report that readers are willing to pay premium prices for high-quality print products that offer a respite from the endless scroll of digital content.",
      "\"What we're seeing is not a rejection of digital, but rather a more balanced media diet,\" explains Dr. Eleanor Rigby, media psychologist and author of 'The Tangible Text'. \"People are becoming more intentional about how they consume content, and print offers a different kind of reading experience—one that's more immersive and less distracting.\"",
      "This shift has prompted digital-native publications to experiment with limited print editions, special collections, and subscription-based print offerings. The economics remain challenging, but innovative approaches to production and distribution are making print more viable for niche audiences willing to pay for quality.",
      "As this trend continues, the distinction between 'old' and 'new' media is becoming less relevant. Instead, we're witnessing the emergence of a more nuanced media landscape where different formats serve different purposes in our information ecosystem.",
    ],
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1170&auto=format&fit=crop",
    category: "Media",
    author: "Eleanor Rigby",
    date: "April 13, 2025",
  },
  {
    id: 2,
    title: "Traditional Craftsmanship Making a Comeback in Modern Design",
    excerpt:
      "Artisans are finding renewed interest in their handcrafted goods as consumers seek authenticity.",
    content: [
      "Artisans are finding renewed interest in their handcrafted goods as consumers seek authenticity in an increasingly digital world. This resurgence in traditional craftsmanship is influencing everything from furniture to fashion, with designers incorporating time-honored techniques into contemporary products.",
      '"There\'s something deeply satisfying about creating or owning something made by human hands," says Marcus Chen, a furniture maker who combines traditional joinery with modern design principles. "Each piece tells a story and has its own character that mass-produced items simply can\'t replicate."',
      "Design schools are responding to this trend by reintroducing traditional craft techniques into their curricula, while major brands are collaborating with artisans to create limited edition collections that showcase handcrafted elements.",
      "The movement goes beyond aesthetics—it also addresses growing concerns about sustainability and ethical production. Handcrafted goods often have lower environmental footprints and support local economies rather than global supply chains.",
      "As consumers become more conscious of these factors, they're increasingly willing to invest in quality pieces that combine craftsmanship with contemporary design, suggesting this trend may have lasting impact on our material culture.",
    ],
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=1170&auto=format&fit=crop",
    category: "Arts",
    author: "Marcus Chen",
    date: "April 12, 2025",
  },
  {
    id: 3,
    title: "The Unexpected Economic Impact of Vintage Fashion Trends",
    excerpt:
      "Thrift stores and secondhand clothing markets are experiencing unprecedented growth.",
    content: [
      "Thrift stores and secondhand clothing markets are experiencing unprecedented growth as vintage fashion continues to gain mainstream popularity. What began as a niche interest has evolved into a major economic force that's reshaping the fashion industry.",
      "Recent market research indicates the global secondhand clothing market is expected to reach $64 billion by 2026, growing at three times the rate of the overall apparel market. This surge is driven by a combination of factors: sustainability concerns, unique style preferences, and the thrill of the hunt that comes with vintage shopping.",
      '"We\'ve seen a 300% increase in sales over the past two years," reports Sophia Miller, owner of Retro Revival, a vintage boutique in the downtown arts district. "Younger shoppers especially are seeking out one-of-a-kind pieces that have history and character."',
      "The boom extends beyond traditional thrift stores. Online platforms specialized in secondhand fashion have attracted significant investment, with some reaching unicorn status in recent funding rounds. Meanwhile, established fashion brands are launching their own resale programs to capitalize on the trend.",
      "Economists note that this shift represents a significant realignment of value in the fashion ecosystem, with potential long-term effects on manufacturing, retail, and consumer behavior in the clothing industry.",
    ],
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1171&auto=format&fit=crop",
    category: "Business",
    author: "Sophia Miller",
    date: "April 11, 2025",
  },
  {
    id: 4,
    title: "Urban Gardens Transform City Landscapes and Communities",
    excerpt:
      "Residents are reclaiming unused spaces to create green havens and food sources.",
    content: [
      "Residents are reclaiming unused spaces to create green havens and food sources in urban centers around the world. From rooftops to vacant lots, these community-led initiatives are transforming city landscapes while addressing food security and environmental concerns.",
      "In metropolitan areas where concrete typically dominates, these urban gardens provide crucial green spaces that improve air quality, reduce urban heat island effects, and create habitats for pollinators and other wildlife.",
      '"Our garden has become so much more than just a place to grow food," explains James Wilson, coordinator of the Greenpoint Community Garden. "It\'s a classroom for local schools, a gathering place for neighbors, and a demonstration of what\'s possible even in dense urban environments."',
      "Municipal governments are increasingly supporting these initiatives through policy changes that facilitate access to land, provide water connections, and offer grants for materials and education programs. Some cities have even updated zoning codes to explicitly permit urban agriculture in residential and commercial areas.",
      "Research indicates that beyond environmental benefits, these gardens significantly impact community resilience and public health by providing fresh produce in food deserts and creating spaces for physical activity and social connection.",
      "As climate change and food security concerns intensify, urban gardening is likely to become an even more critical component of sustainable city planning and community development strategies.",
    ],
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1170&auto=format&fit=crop",
    category: "Environment",
    author: "James Wilson",
    date: "April 10, 2025",
  },
  {
    id: 5,
    title: "Rediscovering the Art of Letter Writing in the Digital Age",
    excerpt:
      "Pen pals and handwritten correspondence are making a surprising comeback among younger generations.",
    content: [
      "Pen pals and handwritten correspondence are making a surprising comeback among younger generations, offering a tangible alternative to digital communication. Stationery shops report increasing sales of fine papers, fountain pens, and wax seals as people rediscover the intimacy and permanence of physical letters.",
      '"There\'s something magical about receiving a handwritten letter," says Emma Thompson, founder of The Letter Exchange, an organization that matches pen pals worldwide. "It\'s a physical artifact that someone created just for you, using their own hand and taking their time. That carries an emotional weight that text messages or emails simply don\'t have."',
      "Schools are incorporating letter writing into their curricula, not just as a language arts exercise but as a way to build empathy and communication skills. International pen pal programs connect students across cultures, fostering global understanding through personal exchange.",
      "Psychologists note that letter writing offers distinct cognitive and emotional benefits. The slower pace encourages reflection and thoughtfulness, while the physical act of writing by hand engages different neural pathways than typing.",
      '"In our research, we\'ve found that people express themselves differently when writing by hand versus typing," explains Dr. Michael Rivera, cognitive psychologist at Central University. "The letters tend to be more intimate, more revealing, and often more creative."',
      "As digital fatigue continues to grow, many see this revival of letter writing not as rejection of technology but as a complementary practice—a way to maintain deeper connections in an increasingly fast-paced world.",
    ],
    image:
      "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?q=80&w=1169&auto=format&fit=crop",
    category: "Culture",
    author: "Emma Thompson",
    date: "April 9, 2025",
  },
  {
    id: 6,
    title: "The Psychology Behind Our Fascination with Nostalgic Media",
    excerpt:
      "Research reveals why we're drawn to the aesthetic and emotional qualities of past eras.",
    content: [
      "Research reveals why we're drawn to the aesthetic and emotional qualities of past eras, as nostalgia continues to influence everything from entertainment to consumer products. This psychological phenomenon has become particularly pronounced in recent years, with streaming platforms, fashion brands, and technology companies all leaning into retro aesthetics.",
      '"Nostalgia serves a powerful psychological function," explains Dr. David Park, who specializes in media psychology. "It helps us maintain a sense of identity continuity through time and can provide comfort during periods of uncertainty or transition."',
      "Brain imaging studies have shown that nostalgic recollections activate reward centers in the brain similar to those triggered by meaningful social connections. This may explain why content that evokes collective nostalgia—whether it's a show set in the 1980s or music that samples vintage recordings—can create such strong emotional responses and foster community among fans.",
      "The digital age has transformed how we experience nostalgia, making artifacts from previous decades instantly accessible. Streaming services algorithmically recommend content from our formative years, while social media platforms regularly resurface memories through 'on this day' features.",
      "Interestingly, research shows that people can experience nostalgia for eras they never personally lived through, a phenomenon called 'historical nostalgia.' This explains why young adults might feel sentimental about vinyl records or typewriters despite growing up in a digital world.",
      "As technology continues to accelerate cultural change, researchers predict that our relationship with nostalgia will become increasingly complex, with potential implications for mental health, social cohesion, and creative expression.",
    ],
    image:
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1170&auto=format&fit=crop",
    category: "Science",
    author: "David Park",
    date: "April 8, 2025",
  },
  {
    id: 7,
    title: "Local Libraries Reinvent Themselves as Community Innovation Hubs",
    excerpt:
      "Beyond books, these institutions are becoming centers for creativity and collaboration.",
    content: [
      "Beyond books, public libraries across the country are transforming into vibrant community innovation hubs that offer everything from 3D printing and recording studios to business incubators and digital media labs. This evolution represents a significant reimagining of the library's role in 21st-century communities.",
      '"Libraries have always been about access to information and resources," says Olivia Johnson, director of the Metropolitan Library System. "The formats and tools may have changed, but our core mission remains the same: connecting people with the resources they need to learn, create, and engage with their community."',
      "Many libraries now feature makerspaces where patrons can access tools and equipment that would be prohibitively expensive for individuals to purchase. These spaces democratize access to technology and foster collaborative learning environments across generations and socioeconomic boundaries.",
      "Programming has expanded beyond traditional book clubs to include coding classes, entrepreneurship workshops, and digital literacy training for seniors. Some libraries host regular hackathons or partner with local businesses to provide job training and career development services.",
      "The physical spaces themselves are being redesigned to accommodate these new functions, with flexible layouts, improved technology infrastructure, and comfortable gathering areas that encourage conversation and collaboration.",
      "Despite budget challenges, libraries that have embraced this evolution report increased patronage and community engagement. Usage statistics show that libraries offering innovation services attract more diverse visitors and significantly higher visit frequency compared to traditional models.",
      "As this trend continues, libraries are positioning themselves as essential infrastructure for community resilience, economic development, and lifelong learning in the digital age.",
    ],
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1170&auto=format&fit=crop",
    category: "Education",
    author: "Olivia Johnson",
    date: "April 7, 2025",
  },
  {
    id: 8,
    title:
      "Quantum Computing Breakthrough Promises New Era for Materials Science",
    excerpt:
      "Researchers have developed a quantum algorithm that can simulate complex molecular structures with unprecedented accuracy.",
    content: [
      "Researchers have developed a quantum algorithm that can simulate complex molecular structures with unprecedented accuracy, potentially revolutionizing materials science and drug discovery. The breakthrough, announced yesterday by a team at the Quantum Computing Research Institute, represents a significant step toward practical quantum advantage in scientific applications.",
      "Traditional computers struggle to model the quantum mechanical behavior of molecules accurately, limiting scientists' ability to predict the properties of new materials or pharmaceutical compounds before synthesizing them in a laboratory. Quantum computers, which operate according to the same quantum mechanical principles that govern molecular behavior, have long promised to overcome this limitation.",
      '"What makes this algorithm particularly exciting is that it can run effectively on today\'s noisy intermediate-scale quantum processors," explains Dr. Sarah Chen, lead researcher on the project. "Previous approaches required error-corrected quantum computers that are still years away from practical implementation."',
      "In initial tests, the algorithm successfully predicted the electronic structure of complex molecules involved in next-generation solar cells with accuracy that would require days or weeks of calculation time on the world's most powerful supercomputers.",
      "Industry partners are already exploring applications in materials development for batteries, carbon capture technologies, and targeted pharmaceuticals. Analysts suggest this breakthrough could accelerate innovation cycles in these fields by 30-50%, potentially saving billions in research and development costs.",
      "As quantum computing hardware continues to advance, the researchers anticipate further improvements in simulation capabilities that could fundamentally transform how materials science research is conducted.",
    ],
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    category: "Technology",
    author: "Sarah Chen",
    date: "April 6, 2025",
  },
  {
    id: 9,
    title:
      "Political Landscape Shifts as Independent Candidates Gain Ground Nationwide",
    excerpt:
      "Traditional party structures face unprecedented challenges as independent movements build momentum.",
    content: [
      "Traditional party structures face unprecedented challenges as independent candidates and movements build momentum in local and state elections across the country. Recent election results show independent candidates winning in districts that have been party strongholds for decades, signaling a potential realignment in American politics.",
      '"Voters are increasingly frustrated with partisan gridlock and are looking for representatives who will focus on problem-solving rather than party loyalty," explains political analyst Jonathan Rivera. "What we\'re seeing isn\'t just a protest vote—it\'s the emergence of a more issue-focused, less ideologically rigid approach to politics."',
      "The trend is particularly pronounced among younger voters and in suburban districts, where candidates running on pragmatic platforms addressing local concerns like infrastructure, education, and community development are finding success regardless of party affiliation.",
      "Several states have also seen the formation of new political organizations that function more as networks of like-minded independents than traditional parties. These groups provide candidates with volunteer networks and fundraising support without imposing ideological litmus tests or strict party discipline.",
      "Established parties are responding with varying strategies—some by becoming more ideologically distinct, others by loosening party structures to accommodate more diverse viewpoints within their ranks.",
      "While it's too early to predict whether this represents a lasting structural change or a temporary response to current political conditions, analysts suggest that the 2026 midterm elections will be a critical test of whether these independent movements can sustain their momentum and translate local successes to the national stage.",
    ],
    image:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2069&auto=format&fit=crop",
    category: "Politics",
    author: "Jonathan Rivera",
    date: "April 5, 2025",
  },
  {
    id: 10,
    title: "The Ethics of AI-Generated Art Divides Creative Communities",
    excerpt:
      "As artificial intelligence creates increasingly sophisticated artwork, questions of authorship and creativity become more complex.",
    content: [
      "As artificial intelligence creates increasingly sophisticated artwork, questions of authorship, creativity, and compensation are dividing creative communities. The debate intensified this week when the prestigious National Arts Foundation announced it would accept AI-assisted works in its annual competition, though in a separate category from traditionally created pieces.",
      '"We\'re facing fundamental questions about what it means to be an artist in the 21st century," says Maria Hernandez, curator at the Modern Art Institute. "These technologies aren\'t just tools like paintbrushes or cameras—they\'re collaborators that contribute creative decisions to the artistic process."',
      "On one side of the debate are artists and technologists who embrace AI as an expressive medium that expands creative possibilities. They argue that prompting and directing AI systems requires artistic vision and that the human curator of AI outputs deserves recognition as the author of the resulting work.",
      "Others express concern about potential exploitation, particularly as many AI systems have been trained on the work of living artists without explicit permission or compensation. Several prominent artists' collectives have filed lawsuits against AI companies, arguing that training algorithms on copyrighted works constitutes infringement.",
      "The controversy extends beyond visual arts into music, literature, and film, where AI tools are being used to generate everything from pop songs to screenplay drafts.",
      "Legal frameworks are struggling to keep pace with these developments. Current copyright law in most jurisdictions doesn't easily accommodate works co-created by humans and machines, leading to calls for legislative updates to address this new creative paradigm.",
      '"Whatever position one takes on AI art, it\'s clear that our understanding of creativity is undergoing a profound shift," Hernandez concludes. "The boundaries between human and machine creativity are becoming increasingly blurred, and our cultural and legal institutions will need to adapt."',
    ],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    category: "Opinion",
    author: "Maria Hernandez",
    date: "April 4, 2025",
  },
  {
    id: 11,
    title:
      "Emerging Health Crisis: The Rise of Antibiotic-Resistant Infections",
    excerpt:
      "Medical researchers warn of growing threat as common infections become increasingly difficult to treat.",
    content: [
      "Medical researchers are sounding the alarm about a growing public health crisis as common infections become increasingly resistant to available antibiotics. A report released this week by the Global Health Security Initiative estimates that antibiotic-resistant infections now cause over 1.5 million deaths annually worldwide, with that number projected to reach 10 million by 2050 if current trends continue.",
      '"We\'re entering what could become a post-antibiotic era," warns Dr. Michael Zhang, infectious disease specialist at University Medical Center. "Procedures we now take for granted—from routine surgeries to cancer treatments that suppress the immune system—could become much riskier if we can\'t rely on antibiotics to prevent or treat infections."',
      'The crisis has multiple causes, including overuse of antibiotics in healthcare and agriculture, lack of investment in developing new antimicrobial drugs, and challenges in infection control in healthcare settings. Particularly concerning is the emergence of "pan-resistant" bacteria that show resistance to virtually all available treatment options.',
      "Public health officials are implementing multifaceted strategies to address the threat. These include stricter antibiotic stewardship programs in hospitals, regulations limiting antibiotic use in livestock, and international cooperation to monitor and respond to emerging resistance patterns.",
      "Researchers are also exploring alternative approaches to fighting bacterial infections, including bacteriophage therapy, immune system modulation, and new methods to make existing antibiotics more effective.",
      '"This is a complex problem that requires coordination across healthcare, agriculture, pharmaceutical development, and public policy," explains Dr. Zhang. "But unlike many global health challenges, this is one we\'ve created ourselves—which means we also have the power to solve it if we act decisively."',
    ],
    image:
      "https://images.unsplash.com/photo-1576671414121-aa2d0967818d?q=80&w=2070&auto=format&fit=crop",
    category: "Health",
    author: "Michael Zhang",
    date: "April 3, 2025",
  },
  {
    id: 12,
    title: "Underdog Team's Championship Run Captivates Nation",
    excerpt:
      "Against all odds, the Metro City Mavericks have advanced to the finals after an historic season.",
    content: [
      "Against all odds, the Metro City Mavericks have advanced to the championship finals, completing one of the most remarkable underdog stories in sports history. The team, which hadn't made the playoffs in twelve years and was widely predicted to finish last in their division, will face the defending champions next week in a best-of-seven series that has captured the nation's imagination.",
      '"What this team has accomplished goes beyond sports," says veteran sports analyst Thomas Williams. "They\'ve become a symbol of perseverance and the power of collective belief. Their journey resonates with people because it reminds us that sometimes the impossible actually isn\'t."',
      "The Mavericks' success has been attributed to a combination of innovative coaching strategies, exceptional team chemistry, and breakthrough performances from previously overlooked players. Coach Rebecca Chen, in her second year with the team, has implemented an unconventional system that maximizes the specific talents of her roster rather than adhering to traditional positional frameworks.",
      'Center Marcus Johnson, who emerged as the team\'s unlikely leader after starting the season on the bench, credits the team\'s success to their unique bond. "We don\'t have superstars or egos—we just have each other," Johnson explained after their semifinal victory. "When you truly believe in the person next to you, you can accomplish things nobody thought possible."',
      'The team\'s success has transformed their home city, with businesses displaying Mavericks colors, schools organizing watch parties, and even the mayor declaring an official "Mavericks Week" leading up to the finals. Merchandise sales have increased by over 3000% compared to last season.',
      "Whatever the outcome of the championship series, the Mavericks' journey has already earned a place in sports lore and provided a unifying narrative in a time of social division. As one fan's viral sign at the semifinal game read: \"Some teams play for history. The Mavericks are making it.\"",
    ],
    image:
      "https://images.unsplash.com/photo-1562077981-4d7eafd44932?q=80&w=2070&auto=format&fit=crop",
    category: "Sports",
    author: "Thomas Williams",
    date: "April 2, 2025",
  },
  {
    id: 13,
    title: "Global Summit Reaches Historic Climate Agreement",
    excerpt:
      "Representatives from 195 countries have signed a binding agreement to reduce carbon emissions by 50% by 2035, marking a watershed moment in international climate policy.",
    content: [
      "Representatives from 195 countries have signed a binding agreement to reduce carbon emissions by 50% by 2035, marking a watershed moment in international climate policy. The accord, reached after six days of intense negotiations, includes unprecedented commitments from both developed and developing nations.",
      '"This agreement represents a fundamental shift in how we approach the climate crisis," said UN Secretary-General Amina Mohammed. "For the first time, we have concrete commitments with measurable targets and enforcement mechanisms that hold all nations accountable."',
      "The agreement includes a $100 billion annual fund to assist developing countries in transitioning to clean energy sources, with contributions proportional to historical emissions. Additionally, a carbon pricing mechanism will be implemented globally, beginning in 2026.",
      'Environmental groups have cautiously welcomed the agreement while emphasizing the need for immediate action. "These targets are ambitious and necessary, but implementation must begin today, not tomorrow," said Greenpeace International Director Thomas Chen.',
      "Financial markets responded positively to the news, with renewable energy stocks seeing significant gains. Analysts suggest the agreement provides the regulatory certainty businesses have been seeking to make long-term investments in sustainable infrastructure.",
    ],
    image:
      "https://images.unsplash.com/photo-1510828631147-95ab1bd423af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "World",
    author: "Amina Mohammed",
    date: "April 14, 2025",
  },
  {
    id: 14,
    title: "Senate Passes Landmark Education Reform Bill",
    excerpt:
      "After months of negotiation, the Senate has approved a comprehensive education package that dramatically increases funding for public schools and teacher salaries.",
    content: [
      "After months of negotiation, the Senate has approved a comprehensive education package that dramatically increases funding for public schools and teacher salaries. The bill, which passed with bipartisan support, represents the most significant federal investment in education in over three decades.",
      "The legislation allocates $150 billion over five years to reduce class sizes, increase teacher pay by an average of 15%, and modernize school infrastructure nationwide. It also expands free meal programs and provides additional resources for schools in underserved communities.",
      '"Every child deserves access to quality education regardless of zip code," said Senator Maria Rodriguez, one of the bill\'s primary sponsors. "This legislation addresses systematic inequities while giving educators the resources they need to succeed."',
      'The National Education Association called the bill "a turning point for American education," noting that increased funding for teacher salaries could help address critical staffing shortages affecting districts across the country.',
      "The bill now heads to the House, where it is expected to pass with minor amendments before being sent to the President's desk for signature.",
    ],
    image:
      "https://images.unsplash.com/photo-1509191436522-d296cf87d244?q=80&w=1170&auto=format&fit=crop",
    category: "Politics",
    author: "Maria Rodriguez",
    date: "April 15, 2025",
  },
  {
    id: 15,
    title: "The Revival of Drive-In Theaters Across Rural America",
    excerpt:
      "Once considered relics of the past, drive-in theaters are experiencing a remarkable resurgence as communities seek outdoor entertainment options with a nostalgic twist.",
    content: [
      "Once considered relics of the past, drive-in theaters are experiencing a remarkable resurgence as communities seek outdoor entertainment options with a nostalgic twist. Over the past year, more than 50 new drive-in theaters have opened across rural America, with dozens more under development.",
      '"There\'s something magical about watching a movie under the stars," says Robert Jackson, who recently opened Starlight Drive-In in rural Montana. "People crave shared experiences that feel authentic and connected to simpler times."',
      "Modern drive-ins are reimagining the experience for contemporary audiences while preserving the nostalgic elements that made them cultural touchstones. Many new venues offer digital projection, gourmet food trucks, and smartphone apps for ordering concessions without leaving your vehicle.",
      "Industry analysts note that drive-ins align with several current social trends: outdoor activities, support for local businesses, and experiences that can be shared on social media. Additionally, they provide affordable entertainment options for families in rural communities where entertainment venues are often limited.",
      '"The revival of drive-ins represents a fascinating intersection of nostalgia and innovation," explains cultural historian Dr. Samantha Lee. "They\'re preserving a distinctly American cultural tradition while adapting it for the 21st century."',
    ],
    image:
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=1170&auto=format&fit=crop",
    category: "Culture",
    author: "Robert Jackson",
    date: "April 16, 2025",
  },
  {
    id: 16,
    title: "The Case for a Four-Day Workweek",
    excerpt:
      "Research increasingly suggests that reducing standard work hours could improve productivity, employee well-being, and environmental outcomes.",
    content: [
      "Research increasingly suggests that reducing standard work hours could improve productivity, employee well-being, and environmental outcomes. As companies experiment with abbreviated schedules, a growing body of evidence challenges conventional wisdom about workplace efficiency and work-life balance.",
      "A two-year study involving 33 companies and more than 900 employees found that organizations that transitioned to four-day workweeks saw revenue increase by an average of 8.5%, while employee turnover decreased by 57%. Notably, self-reported stress levels among workers fell by 39%.",
      '"We\'ve been working with an outdated model designed for industrial-era manufacturing," argues organizational psychologist Dr. James Wilson. "Knowledge work functions differently, and performance isn\'t linearly related to hours spent at a desk."',
      "Critics contend that condensed schedules aren't feasible across all industries, particularly in healthcare, education, and customer service. They also raise concerns about potential unintended consequences, such as increased intensity during working hours or inequitable implementation that benefits only certain types of workers.",
      "Nevertheless, political momentum for shortened workweeks is building. Several countries, including Spain and Scotland, have launched government-backed pilot programs to assess potential nationwide implementation. Meanwhile, Iceland has already permanently adopted reduced hours for many public sector employees following successful trials.",
      "As debates continue, the four-day workweek represents a fundamental reconsideration of how we structure work in modern society, challenging assumptions that have remained largely unquestioned since the early 20th century.",
    ],
    image:
      "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?q=80&w=1170&auto=format&fit=crop",
    category: "Opinion",
    author: "James Wilson",
    date: "April 17, 2025",
  },
  {
    id: 17,
    title: "Archeologists Uncover Ancient Temple Beneath Modern City",
    excerpt:
      "Construction work in downtown Alexandria has revealed an intact temple complex dating back over 2,000 years, providing new insights into Hellenistic Egypt.",
    content: [
      "Construction work in downtown Alexandria has revealed an intact temple complex dating back over 2,000 years, providing new insights into Hellenistic Egypt. The discovery, made during excavation for a new subway line, has been described as the most significant archaeological find in the region in decades.",
      "The temple appears to be dedicated to the ancient Egyptian goddess Isis, but contains elements of Greek architectural style, reflecting the multicultural nature of Alexandria during the Ptolemaic period. Remarkably well-preserved murals depict scenes from Egyptian mythology with Greek artistic influences.",
      '"This discovery fundamentally changes our understanding of religious practices in Ptolemaic Alexandria," explains Dr. Fatima Ibrahim, head of the archaeological team. "The temple shows clear evidence of Greek and Egyptian cultural fusion that\'s rare to find in such an intact state."',
      "Among the most significant artifacts recovered are several bilingual inscriptions in both Greek and Egyptian hieroglyphics, which may help scholars better understand how these languages influenced each other during this pivotal historical period.",
      "Authorities have temporarily halted construction of the subway line while experts debate how to preserve the temple. Options under consideration include redesigning the subway route or incorporating the archaeological site into the station design, creating an underground museum.",
      "The discovery has reignited interest in Alexandria's ancient past and raised questions about what other historical treasures might lie beneath the modern city's streets.",
    ],
    image:
      "https://images.unsplash.com/photo-1528380781045-1899ae4ed648?q=80&w=1170&auto=format&fit=crop",
    category: "Archive",
    author: "Fatima Ibrahim",
    date: "April 18, 2025",
  },
  {
    id: 18,
    title:
      "Brain-Computer Interface Allows Paralyzed Patients to Write Text Messages",
    excerpt:
      "A breakthrough neural implant has enabled individuals with severe paralysis to compose text messages and emails using only their thoughts.",
    content: [
      "A breakthrough neural implant has enabled individuals with severe paralysis to compose text messages and emails using only their thoughts. The technology, developed by researchers at Stanford University and NeuroLink Corporation, represents a significant advance in brain-computer interface (BCI) capabilities.",
      "The system works by implanting a small array of electrodes on the surface of the brain's motor cortex. These electrodes detect neural signals associated with the intention to write specific letters. A machine learning algorithm then translates these signals into text on a screen in real-time.",
      "In clinical trials, participants with spinal cord injuries were able to compose text at an average rate of 18 words per minute—approximately one-third the speed of typical smartphone typing. Perhaps more impressively, the system achieved an accuracy rate of 94% after just two weeks of use.",
      '"This technology is life-changing," said Michael Chen, one of the trial participants who has been paralyzed from the neck down for eight years. "Being able to communicate independently without assistance gives me back a fundamental part of my humanity."',
      "While the current version requires surgical implantation, researchers are already working on less invasive methods that could make the technology more widely accessible. They anticipate that future iterations could potentially benefit people with a variety of conditions, including ALS, stroke, and cerebral palsy.",
      "Beyond medical applications, the research raises both exciting possibilities and ethical questions about the future of direct brain-computer communication technologies for the general population.",
    ],
    image:
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1170&auto=format&fit=crop",
    category: "Technology",
    author: "Michael Chen",
    date: "April 19, 2025",
  },
  {
    id: 19,
    title: "New Study Challenges Theory on Dark Matter Distribution",
    excerpt:
      "Astronomical observations from the James Webb Space Telescope have prompted scientists to reconsider fundamental assumptions about how dark matter influences galaxy formation.",
    content: [
      "Astronomical observations from the James Webb Space Telescope have prompted scientists to reconsider fundamental assumptions about how dark matter influences galaxy formation. The findings, published yesterday in the journal Nature Astronomy, could lead to significant revisions in our understanding of cosmic structure.",
      "Dark matter—invisible material believed to make up about 85% of the universe's mass—has long been thought to form a relatively uniform spherical halo around galaxies. However, new high-resolution observations of 42 distant galaxies reveal dark matter distributions that are markedly more complex and irregular than current models predict.",
      '"These observations suggest that dark matter may interact with itself and with ordinary matter in ways we hadn\'t anticipated," explains Dr. Sophia Lee, lead author of the study. "The distribution patterns we\'re seeing cannot be explained by our current cosmological models."',
      "Particularly surprising was evidence that in some galaxies, dark matter appears to form filamentary structures that extend far beyond the visible galactic disk. These filaments may connect to a larger cosmic web that influences how galaxies cluster and evolve over billions of years.",
      "The research team has proposed several theoretical modifications that could reconcile observations with existing models, including revisions to how dark matter responds to gravitational forces over large distances.",
      '"This is how science advances—observations challenge theories, and theories adapt," notes Dr. Lee. "What\'s exciting is that we now have the observational tools to directly test ideas that were previously in the realm of pure theory."',
    ],
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1170&auto=format&fit=crop",
    category: "Science",
    author: "Sophia Lee",
    date: "April 20, 2025",
  },
  {
    id: 20,
    title: "Controversial Installation Dominates Venice Biennale Opening",
    excerpt:
      "A monumental work addressing climate displacement has become the most talked-about piece at this year's prestigious art exhibition.",
    content: [
      'A monumental work addressing climate displacement has become the most talked-about piece at this year\'s prestigious Venice Biennale. The installation, titled "Rising Tides," features a life-sized recreation of an abandoned coastal village partially submerged in water that fills the entire central pavilion.',
      "Created by artist collective Climate Witnesses, the work incorporates salvaged materials from actual homes destroyed in recent flooding events across Southeast Asia. Visitors navigate the installation via elevated walkways, experiencing the unsettling sensation of moving through a community actively being reclaimed by rising waters.",
      '"We wanted to transport the reality of climate displacement into a space where it cannot be ignored," explains Mei Lin, one of the collective\'s founding members. "There\'s a profound irony in staging this work in Venice—a city itself threatened by rising sea levels."',
      "Critics have been divided in their responses. Some praise the installation's emotional impact and technical ambition, while others question the ethics of aestheticizing disaster and trauma. Several commentators have also noted that the installation's massive water requirements raise questions about its own environmental footprint.",
      "The controversy has extended beyond artistic circles, with several climate scientists and policy experts weighing in on the work's accuracy in representing climate change impacts. The Italian Minister of Culture has called for public forums to discuss the issues raised by the installation.",
      'Despite—or perhaps because of—these debates, "Rising Tides" has drawn record crowds, with waiting times exceeding three hours during the Biennale\'s opening weekend.',
    ],
    image:
      "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?q=80&w=1170&auto=format&fit=crop",
    category: "Arts",
    author: "Mei Lin",
    date: "April 21, 2025",
  },
  {
    id: 21,
    title: "Circular Economy Startups Attract Record Venture Capital",
    excerpt:
      "Companies focused on reducing waste and reusing materials have seen investment increase by 300% over the past year as sustainability becomes a market driver.",
    content: [
      "Companies focused on reducing waste and reusing materials have seen investment increase by 300% over the past year as sustainability becomes a market driver. Venture capital firms invested over $12 billion in circular economy startups during the first quarter of 2025, according to data released by CleanTech Monitor.",
      "These businesses span diverse sectors, from packaging alternatives and repair services to materials reclamation and software platforms that facilitate sharing or reselling used goods. What unites them is a focus on extending product lifecycles and eliminating the concept of waste.",
      '"We\'re seeing a fundamental shift in how investors evaluate long-term business viability," explains financial analyst Morgan Zhang. "Circular business models are increasingly viewed not just as environmentally responsible but as more resilient to supply chain disruptions and resource constraints."',
      "Particularly notable is the growth in corporate venture capital, with major consumer goods companies and manufacturers establishing dedicated funds to invest in circular innovations relevant to their industries. These strategic investments often come with access to established distribution networks and manufacturing capabilities.",
      "The surge in funding coincides with regulatory changes in major markets. The European Union's Circular Economy Action Plan and similar initiatives in China and California have created strong incentives for businesses to reduce waste and increase recyclability.",
      "Despite the positive trends, challenges remain. Many circular startups struggle with scaling their operations and competing on price with conventional alternatives. Industry experts suggest that continued policy support and consumer education will be crucial for maintaining momentum in the sector.",
    ],
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1170&auto=format&fit=crop",
    category: "Business",
    author: "Morgan Zhang",
    date: "April 22, 2025",
  },
  {
    id: 22,
    title: "New Research Links Gut Microbiome to Mental Health Outcomes",
    excerpt:
      "A landmark study has established clear connections between gut bacteria composition and depression, offering potential for new treatment approaches.",
    content: [
      "A landmark study has established clear connections between gut bacteria composition and depression, offering potential for new treatment approaches. The research, conducted over five years with more than 1,200 participants, provides the strongest evidence yet of the gut-brain connection's role in mental health.",
      "The international research team found that specific patterns of gut microbiome composition were consistently associated with depression symptoms, regardless of geographical location, diet, or genetic factors. Particularly significant was the relationship between reduced microbial diversity and increased depression severity.",
      '"What\'s groundbreaking about this study is not just the correlation but the evidence of causation," explains Dr. Elena Patel, the study\'s principal investigator. "Using carefully designed interventions, we demonstrated that modifying the gut microbiome can produce measurable changes in depression biomarkers and symptoms."',
      "The research identified several bacterial species that appear to influence the production of neurotransmitters and inflammatory compounds that affect brain function. Notably, the study found that dietary changes specifically designed to promote beneficial gut bacteria led to significant improvement in mild to moderate depression symptoms within eight weeks.",
      'Medical professionals caution that microbiome-based treatments should be viewed as complementary to existing therapies rather than replacements. "This represents an exciting new avenue for treatment, but depression is complex and often requires multi-faceted approaches," notes psychiatrist Dr. James Wilson, who was not involved in the research.',
      "Several pharmaceutical and biotech companies have already launched programs to develop microbiome-based therapies targeting mental health conditions, with the first clinical trials expected to begin later this year.",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1170&auto=format&fit=crop",
    category: "Health",
    author: "Elena Patel",
    date: "April 23, 2025",
  },
  {
    id: 23,
    title: "Virtual Reality Training Transforms Olympic Preparation",
    excerpt:
      "Athletes preparing for the 2026 Winter Games are using advanced VR simulations to enhance performance and reduce injury risk.",
    content: [
      "Athletes preparing for the 2026 Winter Games are using advanced VR simulations to enhance performance and reduce injury risk. The technology, developed through collaboration between sports scientists and tech companies, allows competitors to mentally rehearse complex movements and scenarios with unprecedented realism.",
      "For downhill skiers, the system recreates every turn and gradient change of the actual Olympic courses, complete with variable weather conditions and snow textures. Users experience realistic g-forces through a motion platform and receive immediate feedback on their technique from AI analysis.",
      '"The cognitive benefits are extraordinary," explains sports psychologist Dr. Carlos Mendes. "Athletes can build muscle memory and decision-making skills without the physical toll or weather limitations of traditional training. For events that involve high risk, like aerial freestyle or big air snowboarding, this means safer skill development."',
      "The Canadian Olympic Committee reports that athletes using VR training have shown measurable improvements in reaction time, technical consistency, and psychological readiness compared to control groups using only traditional methods.",
      "While the technology was initially developed for winter sports, similar systems are being adapted for summer Olympic events, with particularly promising applications for gymnastics, diving, and track cycling.",
      'Some coaches express concern that excessive reliance on simulation could disconnect athletes from the physical realities of their sports. "VR is a powerful tool, but it complements rather than replaces on-snow training," notes veteran skiing coach Ingrid Bergson. "The sensory experience of actual competition can never be fully replicated."',
    ],
    image:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1169&auto=format&fit=crop",
    category: "Sports",
    author: "Carlos Mendes",
    date: "April 24, 2025",
  },
  {
    id: 24,
    title: "Bioengineered Coral Shows Promise for Reef Restoration",
    excerpt:
      "Scientists have successfully developed heat-resistant coral varieties that could help threatened reef ecosystems survive warming oceans.",
    content: [
      "Scientists have successfully developed heat-resistant coral varieties that could help threatened reef ecosystems survive warming oceans. The breakthrough, announced by marine biologists at the Pacific Reef Institute, represents a potential turning point in efforts to preserve these ecologically critical habitats.",
      "Using a combination of selective breeding and gene-editing techniques, researchers have created coral varieties that can withstand water temperatures up to 2°C higher than their natural counterparts without bleaching. Laboratory tests show these modified corals maintain normal growth rates and reproductive capabilities under conditions that would typically cause severe stress.",
      '"This isn\'t just about creating tougher corals—it\'s about buying time for entire reef ecosystems while we address the underlying climate crisis," explains marine biologist Dr. Ayana Johnson, who led the research team. "These reefs support approximately 25% of all marine species and provide coastal protection for millions of people."',
      "The first controlled open-ocean trials began last month in protected areas of the Great Barrier Reef, with researchers closely monitoring how the modified corals interact with existing reef communities. Initial results show successful integration, though long-term ecological impacts remain to be seen.",
      "The approach has generated debate within conservation circles. Proponents argue that without intervention, many reef systems will collapse entirely before climate mitigation efforts can take effect. Critics worry about unintended consequences of introducing genetically modified organisms into complex marine ecosystems.",
      '"This technology needs to be part of a comprehensive strategy that includes aggressive carbon emission reductions and conventional conservation measures," emphasizes Dr. Johnson. "Bioengineered corals alone cannot save reefs if we don\'t address the root causes of ocean warming and acidification."',
    ],
    image:
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?q=80&w=1170&auto=format&fit=crop",
    category: "Environment",
    author: "Ayana Johnson",
    date: "April 25, 2025",
  },
];

export const getAllArticles = (): Article[] => {
  return articles;
};

export const getArticleById = (id: number): Article | undefined => {
  return articles.find((article) => article.id === id);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(
    (article) => article.category.toLowerCase() === category.toLowerCase()
  );
};

export const getRelatedArticles = (
  id: number,
  limit: number = 3
): Article[] => {
  const article = getArticleById(id);
  if (!article) return [];

  return articles
    .filter((a) => a.id !== id && a.category === article.category)
    .slice(0, limit);
};
