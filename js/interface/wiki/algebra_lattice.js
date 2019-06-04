/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Lattice']=Kx(


	

	
detail('格 Lattice',Table([['名称','记法','定义','性质']],[
	ZLR('链\nChain____________'+kul([
		'链是分配格',
		'链是模格',
		'具有1、2、3个元素的格\\\\ 分别同构于1、2、3个元素的链',
	'四个元素的格必同构于图18-9中a和b之一，',
	'五个元素的格必同构于图18-9中c、d、e、f和g之一',
		]),'','____'),

	ZLR('有限格\n____有限集合的格________'+kul(['有限格⇒有界格（反过来不成立）'
		]),'','____'),

	ZLR('有界格\n____有全上界和全下界的格________'+kul(['全上界和全下界存在则唯一'
		]),'','____'),


	ZLR('分配格\nDistributive Lattice________'+khrA(['满足分配律的格','没有任何子格与2个五元素非分配格中的任何1个同构'])+'____'+
		kul(['链是分配格',
			'分配格是模格',
			'四个元素以下的格都是分配格',
			'五个元素的格仅有2个格是非分配格，\\\\ 其余3个格都是分配格',
		]),'','____'),

	ZLR('模格\n戴德金格\nModular Lattice________'+khrA(['满足模律的格','a≤b ⇒ a⊕ (b*c) = b* (a⊕c) \\\\ 或 a≥b ⇒ a* (b⊕c) = b⊕(a*c)'])+'____'+
		kul(['链是模格',
			'分配格是模格',
			'四个元素以下的格都是模格',
			'五个元素的格仅有1个格是非模格，\\\\ 其余4个格都是模格'
		]),'','____'),


	ZLR('有补格\nComplemented Lattice____________'+kul([''
		]),'','____'),

	ZLR('布尔格\nBoolean Lattice\n布尔代数\nBoolean Algebra____< L, ≤>____'+khrA(['有补分配格','交换律（、结合律、吸收律）、分配律、同一律、互补律'])+'____'+kul([

		]),'','____'),


],'wiki').replace(/\n/g,br))+


detail('格的基本性质',Table([['名称','记法','定义','性质']],[
	ZLR('自反性____a≤a____a≥a','','____'),
	ZLR('反对称性____a≤b，b≤a⇒a=b____a≥b，b≥a⇒a=b','','____'),
	ZLR('可传递性____a≤b，b≤c⇒a≤c____a≥b，b≥c⇒a≥c','','____'),
	ZLR('____a*b≤a,b____a⊕b≥a,b','','____'),
	ZLR('____'+piece(['c≤a','c≤b'],1)+'⇒c≤a*b____'+
			   piece(['c≥a','c≥b'],1)+'⇒c≥a⊕b','','____'),
	ZLR('交换律____a*b=b*a____a⊕b=b⊕a','','____'),
	ZLR('结合律____(a*b)*c=a*(b*c)____(a⊕b)⊕c=a⊕(b⊕c)','','____'),
	ZLR('等幂律____a*a=a____a⊕a=a','','____'),
	ZLR('吸收律____a*(a⊕b)=a____a⊕(a*b)=a','','____'),
	ZLR('____a≤b'+piece(['⇔a*b=a','⇔a⊕b=b']),'','____'),
	ZLR('____'+piece(['a≤b','d≤c'],1)+'⇒'+piece(['a*d≤b*c','a⊕d≤b⊕c']),'','____'),
	ZLR('保序性____b≤c⇒'+piece(['a*b≤a*c','a⊕b≤a⊕c']),'','____'),
	ZLR('分配不等式____a⊕(b*c)≤(a⊕b)*(a⊕c)____a*(b⊕c)≥(a*b)⊕(a*c)','','____'),
	ZLR('模不等式____a≤c⇔a⊕(b*c)≤(a⊕b)*c','','____')


],'wiki').replace(/\n/g,br))

);