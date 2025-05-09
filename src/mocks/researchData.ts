import { Research, UserRole } from '../types';

export const mockResearches: Research[] = [
  {
    id: '1',
    title: 'The Impact of Hormonal Fluctuations on Cognitive Performance in Women',
    abstract: 'This study investigates how hormonal cycles affect cognitive abilities across different phases. We collected data from 500 participants over 6 months, revealing significant correlations between hormone levels and specific cognitive tasks.',
    tags: ['Hormones', 'Cognition', 'Women\'s Health', 'Neuroscience'],
    field: 'Women\'s Health',
    author: {
      id: 'user-1',
      email: 'sarah.johnson@example.com',
      name: 'Dr. Sarah Johnson',
      role: UserRole.Researcher,
      createdAt: new Date('2022-01-15')
    },
    uploadDate: new Date('2023-07-01'),
    isPremium: true,
    price: 29.99,
    views: 1250,
    downloads: 230,
    coverImage: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    title: 'Pregnancy Complications in Women with Autoimmune Disorders: A Comprehensive Review',
    abstract: 'This review examines the prevalence and management of pregnancy complications in women with autoimmune conditions. We analyzed data from 200 clinical studies published between 2010-2022, providing recommendations for clinical care.',
    tags: ['Pregnancy', 'Autoimmune', 'Clinical Care', 'Women\'s Health'],
    field: 'Women\'s Health',
    author: {
      id: 'user-2',
      email: 'emily.chen@example.com',
      name: 'Dr. Emily Chen',
      role: UserRole.Researcher,
      createdAt: new Date('2021-03-20')
    },
    uploadDate: new Date('2023-06-15'),
    isPremium: true,
    price: 34.99,
    views: 980,
    downloads: 145,
    coverImage: 'https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    title: 'Gender Differences in Cardiovascular Disease Diagnosis and Treatment',
    abstract: 'This research highlights disparities in cardiovascular disease diagnosis between men and women. Our analysis of hospital records from 50 institutions shows that women\'s symptoms are often misdiagnosed leading to delayed treatment.',
    tags: ['Cardiovascular', 'Gender Bias', 'Diagnosis', 'Treatment'],
    field: 'Cardiovascular',
    author: {
      id: 'user-3',
      email: 'michael.wong@example.com',
      name: 'Dr. Michael Wong',
      role: UserRole.Researcher,
      createdAt: new Date('2020-11-05')
    },
    uploadDate: new Date('2023-06-01'),
    isPremium: false,
    price: 0,
    views: 2100,
    downloads: 430,
    coverImage: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    title: 'The Role of Estrogen in Neural Plasticity and Neuroprotection',
    abstract: 'This study examines how estrogen affects neural plasticity and offers neuroprotection. Through animal models and in vitro studies, we demonstrate that estrogen modulates synaptic plasticity and protects against neurodegenerative processes.',
    tags: ['Estrogen', 'Neuroscience', 'Neuroprotection', 'Hormones'],
    field: 'Neuroscience',
    author: {
      id: 'user-4',
      email: 'olivia.patel@example.com',
      name: 'Dr. Olivia Patel',
      role: UserRole.Researcher,
      createdAt: new Date('2021-07-12')
    },
    uploadDate: new Date('2023-05-20'),
    isPremium: true,
    price: 24.99,
    views: 850,
    downloads: 110,
    coverImage: 'https://images.pexels.com/photos/8378747/pexels-photo-8378747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '5',
    title: 'Personalized Medicine Approaches for Women with Reproductive Health Disorders',
    abstract: 'This paper presents novel approaches to personalized medicine for treating reproductive health disorders. We developed AI-driven algorithms that analyze genetic, hormonal, and environmental factors to recommend tailored treatment plans.',
    tags: ['Personalized Medicine', 'Reproductive Health', 'AI', 'Treatment'],
    field: 'Reproductive Health',
    author: {
      id: 'user-5',
      email: 'john.davis@example.com',
      name: 'Dr. John Davis',
      role: UserRole.Researcher,
      createdAt: new Date('2022-02-28')
    },
    uploadDate: new Date('2023-05-10'),
    isPremium: false,
    price: 0,
    views: 1520,
    downloads: 280,
    coverImage: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '6',
    title: 'Maternal Mental Health: Implications for Child Development and Family Functioning',
    abstract: 'This longitudinal study follows 300 mothers and their children over 5 years, examining how maternal mental health affects child development and family dynamics. Results show significant correlations between maternal depression and behavioral outcomes.',
    tags: ['Mental Health', 'Child Development', 'Maternal Health', 'Psychology'],
    field: 'Mental Health',
    author: {
      id: 'user-6',
      email: 'amanda.garcia@example.com',
      name: 'Dr. Amanda Garcia',
      role: UserRole.Researcher,
      createdAt: new Date('2020-09-15')
    },
    uploadDate: new Date('2023-04-25'),
    isPremium: true,
    price: 29.99,
    views: 910,
    downloads: 175,
    coverImage: 'https://images.pexels.com/photos/568021/pexels-photo-568021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '7',
    title: 'Innovative Treatments for Endometriosis: A Clinical Trial',
    abstract: 'This paper presents results from a phase II clinical trial of a novel treatment for endometriosis that targets inflammatory pathways. Our findings show a 65% reduction in pain scores and significant improvement in quality of life measures.',
    tags: ['Endometriosis', 'Clinical Trial', 'Treatment', 'Women\'s Health'],
    field: 'Women\'s Health',
    author: {
      id: 'user-7',
      email: 'robert.kim@example.com',
      name: 'Dr. Robert Kim',
      role: UserRole.Researcher,
      createdAt: new Date('2021-05-10')
    },
    uploadDate: new Date('2023-04-12'),
    isPremium: true,
    price: 39.99,
    views: 1350,
    downloads: 290,
    coverImage: 'https://images.pexels.com/photos/8460233/pexels-photo-8460233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '8',
    title: 'The Effects of Hormonal Contraceptives on Mood Regulation and Mental Health',
    abstract: 'This study investigates the relationship between hormonal contraceptive use and mood disorders. Our analysis of data from 5000 women reveals significant associations between specific contraceptive formulations and depression risk.',
    tags: ['Contraceptives', 'Mental Health', 'Hormones', 'Depression'],
    field: 'Mental Health',
    author: {
      id: 'user-8',
      email: 'jennifer.wilson@example.com',
      name: 'Dr. Jennifer Wilson',
      role: UserRole.Researcher,
      createdAt: new Date('2022-01-30')
    },
    uploadDate: new Date('2023-03-28'),
    isPremium: false,
    price: 0,
    views: 2800,
    downloads: 620,
    coverImage: 'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '9',
    title: 'Gender-Specific Immune Responses to Viral Infections',
    abstract: 'This research examines differences in immune responses between men and women during viral infections. We collected data from COVID-19 patients and found significant variations in cytokine production and antibody responses.',
    tags: ['Immunology', 'Gender Differences', 'Viral Infections', 'COVID-19'],
    field: 'Immunology',
    author: {
      id: 'user-9',
      email: 'david.thompson@example.com',
      name: 'Dr. David Thompson',
      role: UserRole.Researcher,
      createdAt: new Date('2020-12-05')
    },
    uploadDate: new Date('2023-03-15'),
    isPremium: false,
    price: 0,
    views: 1950,
    downloads: 410,
    coverImage: 'https://images.pexels.com/photos/5910956/pexels-photo-5910956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '10',
    title: 'Biomarkers for Early Detection of Ovarian Cancer',
    abstract: 'This study identifies novel biomarkers for early-stage ovarian cancer detection. Using proteomic analysis of blood samples from 1000 women, we discovered a panel of five proteins that predict early-stage disease with 92% sensitivity.',
    tags: ['Ovarian Cancer', 'Biomarkers', 'Early Detection', 'Oncology'],
    field: 'Oncology',
    author: {
      id: 'user-10',
      email: 'sophia.lee@example.com',
      name: 'Dr. Sophia Lee',
      role: UserRole.Researcher,
      createdAt: new Date('2021-09-20')
    },
    uploadDate: new Date('2023-02-28'),
    isPremium: true,
    price: 49.99,
    views: 1280,
    downloads: 320,
    coverImage: 'https://images.pexels.com/photos/8351553/pexels-photo-8351553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '11',
    title: 'The Influence of Sex Hormones on Autoimmune Disease Progression',
    abstract: 'This longitudinal study examines how fluctuations in sex hormones affect the progression of autoimmune diseases. We monitored 250 patients with lupus and rheumatoid arthritis over 3 years, revealing distinct patterns of disease activity correlated with hormonal changes.',
    tags: ['Autoimmune', 'Hormones', 'Disease Progression', 'Rheumatology'],
    field: 'Immunology',
    author: {
      id: 'user-11',
      email: 'james.brown@example.com',
      name: 'Dr. James Brown',
      role: UserRole.Researcher,
      createdAt: new Date('2020-08-10')
    },
    uploadDate: new Date('2023-02-15'),
    isPremium: false,
    price: 0,
    views: 1420,
    downloads: 250,
    coverImage: 'https://images.pexels.com/photos/8464587/pexels-photo-8464587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '12',
    title: 'Genetic Factors in Female-Specific Cardiovascular Risk Profiles',
    abstract: 'This study investigates genetic variants associated with cardiovascular disease risk specifically in women. Through genome-wide association studies of 10,000 women, we identified several novel loci that predict heart disease risk independently of traditional risk factors.',
    tags: ['Genetics', 'Cardiovascular', 'Risk Factors', 'Women\'s Health'],
    field: 'Cardiovascular',
    author: {
      id: 'user-12',
      email: 'elizabeth.white@example.com',
      name: 'Dr. Elizabeth White',
      role: UserRole.Researcher,
      createdAt: new Date('2021-11-15')
    },
    uploadDate: new Date('2023-01-30'),
    isPremium: true,
    price: 34.99,
    views: 890,
    downloads: 170,
    coverImage: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];