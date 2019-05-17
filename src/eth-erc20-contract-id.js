// ref: https://github.com/jl777/coins/blob/master/coins

const erc20ContractId = {
  AE: '0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d',
  ANN: '0xe0e73E8fc3a0fA161695be1D75E1Bc3E558957c4',
  BFT: '0x01ff50f8b7f74e4f00580d9596cd3d0d6d6e326f',
  BIO: '0xf18432ef894ef4b2a5726f933718f5a8cf9ff831',
  BITSOKO: '0xb72627650f1149ea5e54834b2f468e5d430e67bf',
  BLZ: '0x5732046a883704404f284ce41ffadd5b007fd668',
  BOX: '0x01e579be97433f861340268521a7a2ab9829082c',
  BTCL: '0x5acd19b9c91e596b1f062f18e3d02da7ed8d1e50',
  BTO: '0x36905fc93280f52362a1cbab151f25dc46742fb5',
  CENNZ: '0x1122b6a0e00dce0563082b6e2953f3a943855c1f',
  CLF: '0x07241118626a7bbb604be4b9ef8ef12e78fd0871',
  CS: '0x46b9ad944d1059450da1163511069c718f699d31',
  CYFR: '0xc68d6276eb43f2433f30500d74f155031606e249',
  DATA: '0x0cf0ee63788a0849fe5297f3407f701e122cc023',
  ELD: '0xaaf7d4cd097317d68174215395eb02c2cca81e31',
  ENG: '0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4',
  ETA: '0x9195e00402abe385f2d00a32af40b271f2e87925',
  ETK: '0x3c4a3ffd813a107febd57b2f01bc344264d90fde',
  FOOD: '0x2a093bcf0c98ef744bb6f69d74f2f85605324290',
  GMBEL: '0xf3cfbca4e083b1418f89545754c7da90d2418b10',
  GPN: '0xE2b407160AAd5540eAc0e80338b9a5085C60F25B',
  GROW: '0x11b57f39f5a42eff60144b333a4d7d58e40297a4',
  GTC: '0xB70835D7822eBB9426B56543E391846C107bd32C',
  GTO: '0xc5bbae50781be1669306b9e001eff57a2957b09d',
  HT: '0x6f259637dcd74c767781e37bc6133cd6a68aa161',
  HTS: '0x20871ef4fc0b8c5ee4fb03f698c4f4f752dda6e5',
  ITL: '0x122A86b5DFF2D085AfB49600b4cd7375D0d94A5f',
  JOI: '0x58ded6994124b4fff298f1416aca3fc9cdba37b2',
  KEA: '0x390d6673c1fa9dbb8000db1ae89252b7d531ab75',
  KICK: '0x27695e09149adc738a978e9a678f99e4c39e9eb9',
  LIKE: '0x02f61fd266da6e8b102d4121f5ce7b992640cf98',
  LINK: '0x514910771af9ca656af840dff83e8264ecf986ca',
  LTR: '0x1bd4e709a076fb71ea1014293a739f2b19ca565d',
  LYS: '0xdd41fbd1ae95c5d9b198174a28e04be6b3d1aa27',
  MAN: '0xe25bcec5d3801ce3a794079bf94adf1b8ccd802d',
  MMX: '0xe7c33a0e04f2316bb321c4ad2976873d09538b56',
  MRPH: '0x7b0c06043468469967dba22d1af33d77d44056c8',
  MTF: '0xf3b98d8c425c76e0c7abadffddc1a26ce3107e45',
  MYB: '0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc',
  NOAH: '0x58a4884182d9e835597f405e5f258290e46ae7c2',
  NPXS: '0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3',
  NS21: '0xcf2450b25b52406bdab999fe7816079f7fd88cd3',
  OCC: '0x0235fe624e044a05eed7a43e16e3083bc8a4287a',
  OVAL: '0x6b1700cc6bce603922cbbc5c45fdb77ee08a74d1',
  PAO: '0x4b6509423371d35e022a2915be0edeffa9147f5a',
  PCL: '0x3618516f45cd3c913f81f9987af41077932bc40d',
  PCNC: '0x090b60abc45e2af60eb058a4c7f25574a1c6ae4a',
  PEP: '0x61630fd1f65a7b72af8e9faa6e2646080131f501',
  PGT: '0x9b3e946e1a8ea0112b147af4e6e020752f2446bc',
  POLY: '0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec',
  PURC: '0x7148b80b38278853ca8263cfc0b57d4478ae6a6e',
  QBIT: '0x1602af2C782cC03F9241992E243290Fccf73Bb13',
  QKC: '0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664',
  RUFF: '0xf278c1ca969095ffddded020290cf8b5c424ace2',
  RVT: '0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244',
  SPANK: '0x42d6622dece394b54999fbd73d108123806f6a18',
  STRM41: '0xbad7a7f7ba71ce3659fe6dcad34af86b9de2a4b2',
  SUB: '0x8D75959f1E61EC2571aa72798237101F084DE63a',
  SVD: '0xbdeb4b83251fb146687fa19d1c660f99411eefe3',
  THETA: '0x3883f5e181fccaF8410FA61e12b59BAd963fb645',
  TILE: '0x25f735b108b4273fb0aceb87599ed8bba10065de',
  TRAT: '0x0cbc9b02b8628ae08688b5cc8134dc09e36c443b',
  TRET: '0xc6d603a9df53d1542552058c382bf115aace70c7',
  CIX: '0x1175a66a5c3343Bbf06AA818BB482DdEc30858E0',
  DCN: '0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6',
  ELY: '0xa95592dcffa3c080b4b40e459c5f5692f67db7f8',
  DROP: '0x4672bad527107471cb5067a887f4656d585a8a31',
  DRT: '0x9af4f26941677c706cfecf6d3379ff01bb85d5ab',
  ELF: '0xbf2179859fc6D5BEE9Bf9158632Dc51678a4100e',
  RLTY: '0xbe99b09709fc753b09bcf557a992f6605d5997b0',
  PXT: '0xc14830e53aa344e8c14603a91229a0b925b0b262',
  STORM: '0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433',
  WAX: '0x39Bb259F66E1C59d5ABEF88375979b4D20D98022',
  KIN: '0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5',
  LALA: '0xfd107b473ab90e8fbd89872144a3dc92c40fa8c9',
  ONNI: '0xbd9c6028e1132a6b52f1ca15c0933a2fd342e21f',
  PAT: '0xBB1fA4FdEB3459733bF67EbC6f893003fA976a82',
  USDT: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  BBT: '0x1500205f50bf3fd976466d0662905c9ff254fc9c',
  OCT: '0x7e9d365C0C97Fe5FcAdcc1B513Af974b768C5867',
  OMG: '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07',
  R: '0x48f775efbe4f5ece6e0df2f7b5932df56823b990',
  UCASH: '0x92e52a1a235d9a103d970901066ce910aacefd37',
  BNB: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
  BTK: '0xdb8646F5b487B5Dd979FAC618350e85018F557d4',
  DAI: '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359',
  DDD: '0x9F5F3CFD7a32700C93F971637407ff17b91c7342',
  DGD: '0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A',
  DGPT: '0xf6cFe53d6FEbaEEA051f400ff5fc14F0cBBDacA1',
  DRGN: '0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e',
  FLLW: '0x0200412995f1bafef0d3f97c4e28ac2515ec1ece',
  FSN: '0xd0352a019e9ab9d757776f532377aaebd36fd541',
  HYD: '0xD233495C48EB0143661fFC8458EAfc21b633f97f',
  IOST: '0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab',
  PPT: '0xd4fa1460F537bb9085d22C7bcCB5DD450Ef28e3a',
  LRC: '0xEF68e7C694F40c8202821eDF525dE3782458639f',
  MDS: '0x66186008C1050627F979d464eABb258860563dbE',
  MKR: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
  SNT: '0x744d70FDBE2Ba4CF95131626614a1763DF805B9E',
  REP: '0x1985365e9f78359a9B6AD760e32412f4a445E862',
  SRN: '0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25',
  YLC: '0x21d5678A62DFe63a47062469Ebb2fAc2817D8832',
  ZRX: '0xE41d2489571d322189246DaFA5ebDe1F4699F498',
  BAT: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
  ETHOS: '0x5Af2Be193a6ABCa9c8817001F45744777Db30756',
  QASH: '0x618E75Ac90b12c6049Ba3b27f5d5F8651b0037F6',
  FUN: '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b',
  KNC: '0xdd974D5C2e2928deA5F71b9825b8b646686BD200',
  SALT: '0x4156D3342D5c385a87D264F90653733592000581',
  BNT: '0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C',
  ICN: '0x888666CA69E0f178DED6D75b5726Cee99A87D698',
  LUPX: '0x49C67AE22c334D0123dD6DBDc44F5302e130a88b',
  PAY: '0xB97048628DB6B661D4C2aA833e95Dbe1A905B280',
  REQ: '0x8f8221aFbB33998d8584A2B05749bA73c37a938a',
  STORJ: '0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC',
  STWY: '0x8a8c71f032362fca2994f75d854f911ec381ac5a',
  GNO: '0x6810e776880C02933D47DB1b9fc05908e5386b96',
  RLC: '0x607F4C5BB672230e8672085532f7e901544a7375',
  ENJ: '0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c',
  QSP: '0x99ea4dB9EE77ACD40B119BD1dC4E33e1C070b80d',
  RDN: '0x255Aa6DF07540Cb5d3d297f0D0D4D84cb52bc8e6',
  WTC: '0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74',
  CVC: '0x41e5560054824eA6B0732E656E3Ad64E20e94E45',
  SAN: '0x7C5A0CE9267ED19B22F8cae653F198e3E8daf098',
  ANT: '0x960b236A07cf122663c4303350609A66A7B288C0',
  LOOM: '0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0',
  MANA: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942',
  MCO: '0xB63B606Ac810a52cCa15e44bB630fd42D8d1d83d',
  MGO: '0x40395044Ac3c0C57051906dA938B54BD6557F212',
  MTL: '0xF433089366899D83a9f26A773D59ec7eCF30355e',
  EDG: '0x08711D3B02C8758F2FB3ab4e80228418a7F8e39c',
  MLN: '0xec67005c4E498Ec7f55E092bd1d35cbC47C91892',
  AMB: '0x4DC3643DbC642b72C158E7F3d2ff232df61cb6CE',
  WINGS: '0x667088b212ce3d06a1b553a7221E1fD19000d9aF',
  POWR: '0x595832f8fc6bf59c85c527fec3740a1b7a361269',
  PRL: '0x1844b21593262668b7248d0f57a220caaba46ab9',
  RHOC: '0x168296bb09e24a88805cb9c33356536b980d3fc5',
  RCN: '0xF970b8E36e23F7fC3FD752EeA86f8Be8D83375A6',
  SANC: '0x03ec7bb59be036870ef696a2abf124f496d6735a',
  SNGLS: '0xaeC2E87E0A235266D9C5ADc9DEb4b2E29b54D009',
  TAAS: '0xE7775A6e9Bcf904eb39DA2b68c5efb4F9360e08C',
  DNT: '0x0AbdAce70D3790235af448C88547603b945604ea',
  CFI: '0x12FEF5e57bF45873Cd9B62E9DBd7BFb99e32D73e',
  LUN: '0xfa05A73FfE78ef8f1a739473e462c54bae6567D9',
  ADT: '0xD0D6D6C5Fe4a677D343cC433536BB717bAe167dD',
  AST: '0x27054b13b1B798B345b591a4d22e6562d47eA75a',
  CDT: '0x177d39AC676ED1C67A2b268AD7F1E58826E5B0af',
  TKN: '0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a',
  HMQ: '0xcbCC0F036ED4788F63FC0fEE32873d6A7487b908',
  BCAP: '0xFf3519eeeEA3e76F1F699CCcE5E23ee0bdDa41aC',
  NMR: '0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671',
  TRST: '0xCb94be6f13A1182E4A4B6140cb7bf2025d28e41B',
  GUP: '0xf7B098298f7C69Fc14610bf71d5e02c60792894C',
  '1ST': '0xAf30D2a7E90d7DC361c8C4585e9BB7D2F6f15bc7',
  TIME: '0x6531f133e6DeeBe7F2dcE5A0441aA7ef330B4e53',
  SWT: '0xB9e7F8568e08d5659f5D29C4997173d84CdF2607',
  DICE: '0x2e071D2966Aa7D8dECB1005885bA1977D6038A65',
  XAUR: '0x4DF812F6064def1e5e029f1ca858777CC98D2D81',
  XOV: '0x153eD9CC1b792979d2Bde0BBF45CC2A7e436a5F9',
  PLU: '0xD8912C10681D8B21Fd3742244f44658dBA12264E',
  HGT: '0xba2184520A1cC49a6159c57e61E1844E085615B6',
  VSL: '0x5c543e7AE0A1104f78406C340E9C64FD9fCE5170',
  IND: '0xf8e386EDa857484f5a12e4B5DAa9984E06E73705',
  FYN: '0x88FCFBc22C6d3dBaa25aF478C578978339BDe77a',
  JST: '0x996a8ae0304680f6a69b8a9d7c6e37d65ab5ab56',
  DEC8: '0x3ab100442484dc2414aa75b2952a0a6f03f8abfd',
  ZIL: '0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27',
  TUSD: '0x0000000000085d4780B73119b644AE5ecd22b376',
};

module.exports = erc20ContractId;