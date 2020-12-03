const input = [
  '4-6 b: bbbdbtbbbj',
  '1-6 g: ggvggbgggstg',
  '1-4 s: lssss',
  '13-14 v: hvvcvvvvvvvvvsvvv',
  '3-5 m: lcmmm',
  '3-4 t: stht',
  '5-6 b: dbkbhb',
  '4-7 p: ppfppppq',
  '4-5 j: jjjjj',
  '3-12 s: sskssssssssss',
  '14-15 z: zrndzbmrzzpzzqzj',
  '12-18 l: tllllllllllllplllbl',
  '8-10 b: bdbvqbtbrb',
  '1-3 c: tcqccc',
  '1-2 n: nbnj',
  '5-7 c: ccccccccc',
  '9-10 l: hpmslrlgll',
  '6-9 n: nnnnnnnnb',
  '6-10 r: rmzjlrsxkbw',
  '6-8 r: bzqnnrrrj',
  '4-14 c: mfffvcbtchzrqcn',
  '1-6 f: ffffffffffffff',
  '2-5 f: wxtkf',
  '8-12 b: rdcbbjbzbbpb',
  '8-18 d: ddtdddddddwvdfdsdd',
  '5-8 s: sssmsgpgszms',
  '6-11 x: xxxxxvxxxxxt',
  '17-18 n: jhrnnzpxzngfqrntmnc',
  '13-14 r: rrrmrrrrlrrshvrrr',
  '4-5 h: hhhhrhh',
  '8-10 d: dgwtdsxnncd',
  '9-13 q: qqbpqmqgmqwqbqqqxcgq',
  '2-5 g: gjjcpgg',
  '6-12 t: ttttvttttttrtt',
  '3-9 h: hhhhhhhhsh',
  '15-16 p: ppppsppppppppppz',
  '2-5 c: csccctcccc',
  '11-14 p: pppppppppppppnp',
  '8-9 j: jvbjjjjrjbjj',
  '8-16 b: qklbmbntmvbhxplbbcb',
  '12-13 j: jjjjsjmfjjjkhj',
  '2-13 t: llckxhfmtznptndcsx',
  '6-8 x: dxxxxvxxtt',
  '3-4 d: ddht',
  '3-4 t: ttdtt',
  '11-12 r: rrrrrrrrrrrd',
  '9-10 h: hhhhhhhhgh',
  '3-16 h: hhhhhhhhhhhhhhnhhh',
  '10-11 h: hxhhhdhhhsh',
  '1-7 n: jnfnjnn',
  '3-4 m: msmnpmpf',
  '15-17 t: tpdtttgltvtttztlv',
  '7-10 v: vvpsvpgjzvvvvjs',
  '1-5 p: pxppg',
  '2-7 w: jwhgkgvxcv',
  '13-14 m: pxxmjznmrzdsbbmmfj',
  '1-4 d: ddddd',
  '14-16 r: rrrrrrrrrrrrrwrr',
  '2-5 l: klbtzzlrlslgswhljtq',
  '6-12 c: qccrcpccccccdccccc',
  '2-18 l: llllllllvllllllllkll',
  '18-20 z: zzzzzzzzszqzwzrzzzzn',
  '5-16 c: cbccclcfcncvqztqc',
  '7-11 m: fnwmtsmgpxncnr',
  '6-7 h: hpjrhbhkshnchbhpph',
  '11-12 s: ssssssssssps',
  '6-9 s: jfsmmssssqz',
  '1-15 l: llllllllllllllbll',
  '2-6 g: gggggwgggpggggggg',
  '6-9 j: jjjpjjjjn',
  '9-13 n: nnnnnnnnnnnnnn',
  '10-13 t: cgntllxnvpkjwxtght',
  '2-11 f: xcftbcdcndkgm',
  '10-13 j: jjjjjjjjjjjjvj',
  '9-17 f: rfrffnsffxqflbffvv',
  '6-11 k: kkkkkrwkqckmk',
  '5-7 q: zfqqqqqn',
  '12-13 c: cfcccvccccckccccv',
  '5-15 z: xhzzzzzzzzfzzknzz',
  '18-19 f: jkfksvmfjbdffffffff',
  '8-11 h: hhhhmhhkhsfdg',
  '14-16 s: ssssssdjssssssssssss',
  '15-16 t: jtmjhsxqqmmthmtttm',
  '5-7 h: hkbjhjhh',
  '2-6 n: knprnfnfhhrcnk',
  '3-4 w: snwd',
  '5-11 w: wwwwnwwwwwwwwwwww',
  '2-12 k: bkqjghpktfsk',
  '14-15 v: vvvsvvvvvvvvvxv',
  '8-9 w: fxwwwwwscwl',
  '9-15 c: sbjvvsmdvqknbccxxx',
  '6-15 t: tpwjtdnnldthxvn',
  '13-15 t: tttttrzmzttjttt',
  '3-11 m: mmvmlmmmwfmjx',
  '13-14 s: gskssssssscssssqjssl',
  '5-10 l: bfnmqlldllp',
  '17-18 q: qkwqqqqqqqqqqqrqqqqq',
  '2-5 r: rsvrrq',
  '3-4 j: jjjdj',
  '3-4 m: mtmk',
  '8-9 k: vsvkvkrkc',
  '10-12 t: ttttttcttttgttt',
  '3-4 n: trzw',
  '5-11 q: qqmpsqbxkqq',
  '13-15 s: sqsssnmwqszfsmv',
  '5-6 b: bbbbzvb',
  '5-13 p: pjjhpnqpzpmpfpfp',
  '4-5 l: mgnwlrw',
  '1-7 k: fkzxwkj',
  '1-10 q: qgxqqqqqqg',
  '8-9 s: ssqssssfss',
  '7-8 c: xxcscclccdvcmqcc',
  '2-6 d: xdlmzdzxrpmlnt',
  '3-9 s: sssssnssgbs',
  '7-10 h: sblrrhqrhh',
  '3-5 n: xnndnnnfnw',
  '9-10 l: vllllqlllhllljxlp',
  '2-5 d: ddxzbxk',
  '10-14 m: mmmmmmmmmmdmmmmsmmm',
  '1-2 f: ffffw',
  '14-15 g: wdjhplhrbcxdgpnt',
  '1-2 l: klllllll',
  '10-11 k: ckkhkkvkkkmkkjkwkkwk',
  '7-9 f: ffrhdvftfpjfqffhnfsf',
  '4-5 c: kkjksrmkccg',
  '5-9 r: rrrrhrrrrr',
  '5-6 p: pppppth',
  '4-10 t: kpfwzjtchtbndblrvst',
  '1-5 l: mllllllnllll',
  '13-16 r: rrrvrrrrrrrrzrrg',
  '17-18 x: xxfxxxxxxxxsxxxxxsxx',
  '8-11 w: rwbnqrngcvpgwwww',
  '4-8 z: zzzzzzzzzz',
  '4-9 b: bbvvbbbbr',
  '2-5 x: qlfhxkx',
  '3-8 t: wvptttttttt',
  '1-3 m: hmmmmqmm',
  '17-19 h: nhhhdvhnhrhhhhnhmdh',
  '11-12 s: psszbdpsgfks',
  '6-7 s: sssssshs',
  '10-15 l: mnkdvnvmxljjtggwcl',
  '1-13 j: qjjjjjjjjjjjdj',
  '4-9 l: jxvkwhlmlhdtgwvgsdzz',
  '5-9 c: ccfghhccccgc',
  '10-11 v: vvvvvvvvvvv',
  '7-8 t: cntwzshkzvmrnnkr',
  '1-11 l: tllllllltllll',
  '15-17 l: lllglvctrvllzkllt',
  '3-5 n: ncnnp',
  '2-3 q: jsqqh',
  '4-10 h: hhhhhhhhhvh',
  '16-18 b: bbnbbbbbtbbkktbbzdr',
  '4-6 g: kbggdhgggggggggggfc',
  '12-13 p: cpvcppqpplwpt',
  '5-10 h: fvhhbrhpghchhhhhh',
  '2-5 b: bbvzn',
  '14-15 x: xxxbxnwxxxxzxxh',
  '13-15 n: nnfgdglfnntnjqn',
  '2-4 c: cfccc',
  '3-5 v: vrvvzdvv',
  '17-19 v: vvvvvvvvvvvvvvvvvvsv',
  '1-20 h: hhhhhhhhhhqhhhhhhhhh',
  '4-15 q: qqqtqqqqqqqqqqqqlq',
  '11-13 h: hhkhvhhhhwhgk',
  '8-11 p: ppvppppppptspf',
  '8-9 m: mmmpmmkmdmpkspmg',
  '1-7 m: lcmvggm',
  '6-12 v: tvfstvvpvzsvcv',
  '8-9 n: nnnqnnwrrdzlmnwlznrn',
  '1-5 s: msssms',
  '1-3 v: vpdzvdvgv',
  '6-9 g: drgrfggcg',
  '6-16 x: djpxhxvncxfghsxx',
  '1-3 b: sjbwwxbvtvbkt',
  '6-8 c: cccccstccjhv',
  '1-11 q: qqqpqqqqqqwqqq',
  '9-11 m: vsbmmmmmmmqmmsm',
  '2-7 g: gqggggggg',
  '2-3 m: mrgvm',
  '6-7 c: cccpcfcc',
  '6-10 w: swbngwswnxnww',
  '13-14 r: rrrrrrrrrrwrrgrdr',
  '3-9 v: vctxhxtfvq',
  '2-9 r: jrrcslgplcprlvgthg',
  '2-3 n: hnnnsxclvdj',
  '10-11 h: zrhghhqhgzh',
  '15-18 z: zzzlzzzzzzzzpzqzpzzz',
  '3-8 f: fffffrfl',
  '1-4 l: rllllfl',
  '1-2 n: nnnnnvtnv',
  '17-19 z: zzzzzzzzzzzzzzzzzzqz',
  '13-15 n: nnnznnnnnnznnnn',
  '2-5 c: gcccncjmsncfcntjc',
  '8-9 h: hhhhhhhhbpsfh',
  '7-11 r: lzvvlbrgjgrr',
  '5-11 x: xxxxqxxxxxxx',
  '4-7 p: gqpkmppzpsmtzhfdfpl',
  '3-4 j: jjdjdg',
  '14-16 z: zzzzzzzgjzzzzpzf',
  '1-2 n: nnnvnwnnnnh',
  '4-5 z: jhzzz',
  '5-7 k: kkkkkkf',
  '8-18 z: khzzrzjzmzzvzzpcclm',
  '5-10 m: kjrhwkhmsm',
  '10-16 v: vvvvvvvvvvvvvvvwv',
  '9-10 l: xhvjsmllkcdtldfxlw',
  '8-10 p: ppjvppbpqhpwhppgbp',
  '4-6 m: jlmkhm',
  '1-3 k: gvpklkkkk',
  '15-16 g: ggjggggvgmgtpgcg',
  '1-4 j: jbjwj',
  '1-3 x: xxxpxxdxxhfx',
  '14-16 v: vxmhhdvvfjjqwhtv',
  '6-7 l: lnkchzlwxlp',
  '3-4 v: vvvcv',
  '13-14 p: pbqpppppzbmppc',
  '6-12 p: glqwzprpqbqf',
  '6-12 l: lllllglllllll',
  '8-9 n: nnsnnnndcn',
  '6-8 p: prwppppp',
  '1-10 q: dqqqqqqqqjq',
  '12-16 w: kwtbdnjqmwwxhwcwswkl',
  '11-14 r: rrnjghfrrrshlrq',
  '2-14 w: vwbbvcvgnxdmxl',
  '7-8 g: sqmggkgslkwlvggg',
  '1-6 q: tqqqqqq',
  '2-3 b: bbbr',
  '7-9 b: jnwbswfpbn',
  '4-5 n: nnlct',
  '3-11 s: ssssssssssp',
  '2-6 f: wjlpwf',
  '5-10 g: gggghqgqgb',
  '1-3 p: ppdg',
  '4-7 j: pjnkjjljjj',
  '1-2 v: ghmjzxmtxjxnv',
  '6-14 k: klgdzfmgdwhqdkhcnzm',
  '6-11 z: tgzpzzzzztc',
  '2-12 b: cxsmjbdgdnrb',
  '4-6 v: lxdvvh',
  '3-8 l: pnpdnrll',
  '7-8 m: mzmswvmmbxmzlmwhdvq',
  '13-14 s: khzssssssssszsssss',
  '10-18 d: dmfdlgcxdbzznbrlqn',
  '13-14 j: jjjjjjjjjjjjdpjj',
  '15-17 j: jjjjjjjjjwjsqjwjj',
  '10-15 x: xxfxkzxxhxxxxxvxxw',
  '7-14 c: wcccwcmmcccccxhcccc',
  '2-7 z: zmzvfzlszr',
  '7-8 k: jjkrklrkkv',
  '8-9 r: rrrrrjrtz',
  '2-3 w: tvws',
  '1-5 b: bbbjm',
  '1-2 q: tqqjf',
  '5-10 j: wlgjghjhjljwtpcdkqwk',
  '2-5 c: dzpkc',
  '5-6 m: mbvmkm',
  '4-15 k: stjkjvvxrmwdpkwsjqvc',
  '6-9 h: hwkgjplmhxwgvnbhwh',
  '12-13 z: zzzzzzzzzzzzz',
  '7-8 q: qqqqqqqqq',
  '2-5 c: clcwmccczclcccc',
  '2-5 l: jlcgfbflklvpfqxtwgg',
  '5-7 n: nnnnnnvnnnnnn',
  '3-5 f: gfktfffqvgltsbff',
  '10-16 p: jppbttppzpqppppp',
  '2-3 m: zmdm',
  '4-6 j: zsmtjjdnrpp',
  '17-18 j: hvvmrkfnnkvrjtjhjj',
  '12-15 d: dtddddddddtwxgld',
  '8-12 r: rdzrwfgrmxwttknxz',
  '6-7 s: rssbktxsgd',
  '11-13 d: ddddmwddddxddndc',
  '3-6 p: ppcpspfp',
  '12-15 j: jjjjjjgjjjjcjlzj',
  '8-12 v: tgjkwfbsxzzvvpmfs',
  '6-7 z: trbfbdz',
  '4-6 v: vvvvvpvv',
  '8-16 p: pnvppdpjppppppph',
  '8-9 z: lzzzzpdzk',
  '1-4 t: qttzz',
  '2-3 d: dhdd',
  '5-8 m: mmmkmmxmkj',
  '2-12 f: hfhzkwdmrlqvfkn',
  '5-6 h: hhhhhph',
  '14-15 b: bbbbxbbbbbbbbbh',
  '2-3 v: vvcj',
  '12-19 d: ddvdwwqdddcdtdmwdqp',
  '3-4 s: ssjssssssss',
  '2-6 c: wzzxqcdcnlgcph',
  '11-12 j: jjdrcjzjkjcs',
  '4-9 z: bzzzzzzxzz',
  '2-8 b: gjbfkxhb',
  '1-3 c: cpksst',
  '1-5 h: hhjhh',
  '14-15 j: jjjjjjjjjjjjjjr',
  '8-9 n: pcndxcfknfbnnls',
  '10-13 k: kkkqzkwbkkkrtn',
  '4-5 r: rzrrrnrj',
  '13-15 p: ppppppppppppppt',
  '3-6 j: fjqqzzzjm',
  '2-9 m: zmjhctkmf',
  '5-6 s: ssmjss',
  '3-4 c: jlfd',
  '8-12 d: qbddfhnddzgvddddd',
  '6-7 p: xfppppcppppxgp',
  '8-13 s: sssssssfssssssss',
  '13-17 g: xskktsjxlvgfxtzzgfj',
  '2-4 q: qqtwfqqnkvbvbhzs',
  '1-5 j: cjmjs',
  '4-5 c: tvccnc',
  '3-14 m: kkfhmnkkmztxtmn',
  '11-15 x: xxxxxpxmxxvbxxxvx',
  '9-11 l: nhgzwmmrkqhblnk',
  '7-10 x: xxxxxdmxxxxxxxx',
  '13-14 v: vvvvvvpvvvjvvcvv',
  '16-17 n: nnnnqnnbnnnnnnnpn',
  '3-4 j: jvjj',
  '15-16 q: zlqsgvpztknqjqqwqvf',
  '3-4 s: sssrsssdss',
  '11-13 g: ggqggmggswggdk',
  '1-4 t: jmtzttztqt',
  '2-3 v: vvvv',
  '11-13 g: cgjgxgggkgbggxg',
  '4-6 g: ggggqlhgmz',
  '8-15 g: prvxwzkvdhgkjlg',
  '6-9 g: gggggnsjlg',
  '12-14 p: mmvlpzkmpgtpvj',
  '7-10 k: kkkxkkjkkkdkkkp',
  '14-16 b: zmztqsrgvjjmswzkbnk',
  '1-2 x: xxbxxxxhx',
  '2-5 l: tlhsx',
  '3-5 x: xxxxn',
  '4-12 c: vdnmtmqwnxkcldc',
  '4-8 x: xxxxjglx',
  '5-13 s: vsssspszssssnsss',
  '3-6 k: kkhkkkknb',
  '3-5 t: pttqtwnprt',
  '10-14 m: ttjqvzmgmmjqzkd',
  '1-5 b: bbbbpbbb',
  '10-15 d: wdjrhvfngdtlkdl',
  '6-7 w: trxwdwww',
  '2-4 n: snxqlgtsmdnnjgwrgmms',
  '16-18 l: klslpljllqlcslqqll',
  '4-7 t: tttwzttjt',
  '9-10 f: ffffffffwf',
  '8-15 h: trhgxjchhxvvhqp',
  '8-12 w: wwwwwwwqwwwg',
  '12-13 x: xxxxxxxxsffqlxx',
  '5-7 k: kkkklkkkktkk',
  '1-7 m: wkmmqmmhf',
  '12-13 h: mhhchwhhhzhhcvh',
  '7-11 k: kkkkkkwkkkgkk',
  '4-6 l: hdlbll',
  '8-12 v: fvvvvvvvrvvv',
  '2-9 h: hzhhhhhhhhhhhhr',
  '6-8 b: qbqjpbbbdsshv',
  '2-3 h: hwhl',
  '4-7 l: mdllxjgdw',
  '3-9 f: rwffzfkpwbzp',
  '3-5 t: ttnttt',
  '7-10 c: mpcccpndqc',
  '6-7 h: fhhhljh',
  '2-7 v: pnvzcns',
  '1-3 v: vvgv',
  '5-9 s: ssssshsspsssssss',
  '4-6 j: mjjjjq',
  '5-14 h: hwbqghmvmmnvhhrqmj',
  '5-6 s: wctjsh',
  '7-8 s: sssscsjs',
  '14-17 v: vvvvvvvvvvvvvvvvv',
  '14-15 w: wxwwwwwwfwwwwsw',
  '6-7 v: ksvvvlpvv',
  '7-18 s: cssstsvsscshsstsss',
  '5-6 b: zzwbpm',
  '6-7 r: bvtmpkxspskr',
  '6-7 v: lvxrvqv',
  '15-17 c: ccccccccccccccccccc',
  '8-12 r: ghxpwhxcqjrr',
  '6-10 k: kzbcdkndqm',
  '5-6 s: tpsxss',
  '1-5 p: qlrlp',
  '4-8 q: qqqkqqqz',
  '7-11 v: vgvsxvwvlxv',
  '2-5 b: bgkbb',
  '3-18 j: jjsplxjxgqjfjrjxjjlx',
  '6-10 k: kxkhkkjkkrvkkk',
  '7-16 t: ttttttzttttttttbtttt',
  '1-7 l: ptzptslrjgwlfgwq',
  '8-10 v: vvqvvvvvvvv',
  '3-5 z: zzzhz',
  '6-7 c: cbrctgc',
  '5-16 l: llllxlllllllllllll',
  '6-7 c: chxclqcdrh',
  '1-10 c: jcmcccccwcccccjbvc',
  '8-14 h: zhhvhhhhhhhhhv',
  '4-7 n: rnnnnnfnnnnnvn',
  '10-12 w: wwwwwwwsgtwww',
  '5-8 c: cmbcctzcj',
  '5-7 f: fffskrf',
  '5-6 l: lllmzl',
  '7-14 m: mmmmmmmmmmmmmmmmmmm',
  '1-9 f: jfffffffzvffff',
  '2-5 g: ggmng',
  '16-17 x: xxxxxxxxxxxxxxxlx',
  '4-10 n: npkgjcfnnnnn',
  '1-13 d: bhkjgsnzxkdgwbdv',
  '6-7 f: ncqfzff',
  '7-10 h: hqhhhhhjhhh',
  '2-4 v: vnvvv',
  '1-6 w: thlmdwgwgtswvtx',
  '3-7 d: ddlkhvfdnpbdr',
  '1-4 q: qbfq',
  '2-6 f: rzfmfrjgcfjk',
  '10-16 b: bbbbblbbbkbbbbbbwqb',
  '13-14 j: jjhcjnkgvrnwjp',
  '5-12 l: lgqwvrlwcllllv',
  '4-8 j: jjgpdjssspjfdbt',
  '1-9 h: hhhhhhhhwhhh',
  '4-6 p: psmppt',
  '2-3 h: zhhhk',
  '2-6 b: bbbbbmbbvb',
  '7-9 z: zzzzzzgzdzz',
  '8-9 d: ddgdmdwddd',
  '2-6 s: nssssv',
  '18-20 x: xxxxxxxxxxxxxxxxxvxx',
  '9-10 m: dzckmrbhcmwvkcxmlx',
  '10-11 v: vwvvvvwvvghvn',
  '3-6 d: wcwxddjhnljfntj',
  '13-15 v: vvvvvvvvvvvvcvc',
  '1-5 x: xxfxfxxkx',
  '7-8 w: wqzjzwwwtw',
  '2-4 f: flgl',
  '3-6 n: ncfngngdnm',
  '5-7 k: kdkmbkkkkxk',
  '5-6 x: xxvxth',
  '5-6 r: rrhhzr',
  '4-6 b: bbbrbbbbbmb',
  '12-13 q: qqqqqqqqqzqkqp',
  '6-14 n: mlbflnrbhlhpdrfln',
  '9-12 q: qqqqqqqqqqqwq',
  '3-4 k: rkncnbk',
  '1-3 j: jjpj',
  '8-9 v: vjvczrvvm',
  '9-16 m: tmnmmmxmbmmmrtmmr',
  '9-11 q: qqqqqzqqsjxq',
  '3-5 h: hhhhcs',
  '11-12 k: kkkkkkkkkkkvqk',
  '11-12 x: xlxxxjjxxxpx',
  '1-12 n: nngtnhlnjfnf',
  '5-7 p: ppptppppp',
  '13-14 l: lllmlflllhllpm',
  '13-14 m: vdkmrdfzmkknmp',
  '13-15 s: ssssssqssssscssss',
  '5-11 h: hhhlxhhhhhhshh',
  '10-11 s: ssssssssssgsssss',
  '6-7 q: kqqqqmqnqq',
  '8-13 l: llllllltlllljll',
  '9-12 j: jjjjjjjjjjjlj',
  '7-11 s: gstcncsssscssssss',
  '4-6 x: lrtjfnhmpmxj',
  '9-20 c: cttccccccnccclcccccc',
  '1-8 w: cwwwwwwwwww',
  '12-13 n: nnnnnnnngnnnnn',
  '1-5 p: pfqwcpnppppwwpqppp',
  '7-8 g: gggsgglghg',
  '6-7 g: gggggggg',
  '4-10 s: ssssssssssss',
  '1-2 n: njsnnln',
  '7-8 z: gzczzwdzkkzz',
  '2-8 b: bbbwjfbh',
  '6-8 r: rrrrbrrbr',
  '2-5 k: lkkkkl',
  '2-3 c: swcgjcm',
  '2-10 t: ttttttttttt',
  '12-13 l: lllllxllllllqhl',
  '2-9 l: qtqxdpqqlwhqwlr',
  '1-5 q: qqxrn',
  '10-11 k: kkkkkkkkkckk',
  '1-2 f: ffff',
  '3-4 r: rrxr',
  '8-9 p: lppppxpsp',
  '2-5 s: ssstchlrds',
  '11-15 m: mmmmmmmmmmmmmmmmm',
  '14-17 k: kkkkkkkkkkgkkkktbkk',
  '1-2 x: xlxx',
  '9-10 w: wwcwptczwzzd',
  '1-3 c: ccgcccccccccccccc',
  '4-5 h: nhhhvh',
  '8-16 l: hlllfllllmltlhlldl',
  '4-5 w: wgwfw',
  '6-15 p: pjpbfrmxqgkxkbqhj',
  '12-17 l: llmtllnlllllllllnns',
  '8-15 n: zjnxzndnznklxzjlx',
  '6-9 r: wpsmstnkgtrmng',
  '3-7 s: csvhxhsgvrsrn',
  '10-15 h: hchhhdhkhghlhgsh',
  '2-9 c: mzbmtccktc',
  '3-4 x: xlzvxg',
  '12-14 k: zmkskknwkkkmkkwkgkkk',
  '4-9 r: vqrrrrdzpl',
  '3-4 g: ggvbxg',
  '5-8 q: xtrqrmqq',
  '16-18 l: zllllllllllllllwlnll',
  '6-7 s: zsqszss',
  '3-4 g: wghgpg',
  '1-6 z: hzzzzrz',
  '3-8 h: hthfqtccnq',
  '15-18 p: ppppppcpppppppnppppp',
  '3-4 l: qplkdmjntlghjlpxlq',
  '10-12 q: xzqkxdvgrqxqqzzxgjj',
  '6-9 q: qqqvsvqqxq',
  '12-13 g: shgcnjlgvcgqg',
  '5-10 l: llklplllmlsl',
  '3-12 l: vllqfzwnsqslpnvrbkh',
  '14-16 g: gjggggggggggggbzcggg',
  '5-11 m: ssmsmbnspmm',
  '11-13 v: mkqvvvvvmcvvz',
  '2-3 k: mkkchtzqsvkbclgxn',
  '4-7 r: rphrrnrrqwknrktrgsg',
  '6-10 z: vpjhzzzkqzjl',
  '16-18 c: ccccccccccccccchccc',
  '1-10 v: qvvvvzvvvvvv',
  '5-7 j: jjrjjjj',
  '14-16 l: zlgdrlqllgpllfhh',
  '3-6 l: llmllll',
  '3-4 l: smdl',
  '4-11 h: kgqhcpvrbldrhbq',
  '1-15 j: ljjjjjjjjjjjjjjj',
  '7-14 c: ccccccccccccccc',
  '2-10 v: vzvjvvvvvvvvv',
  '4-9 p: flbpmqmhkpt',
  '10-12 q: rtdrqmpcsqrhqqchqczw',
  '16-19 w: vlwxgtmjwrzvqgdwbdw',
  '8-15 c: gkcccslctcmszhc',
  '3-7 f: hhffhbbtbwzw',
  '4-9 s: msbsxssds',
  '13-15 p: pppppppppcpppxldp',
  '6-7 m: mmmmmqmm',
  '11-12 m: mxmmzwmmmdqpmp',
  '7-12 l: gncmgzxlqcllqgt',
  '12-14 t: tttttttttttdtt',
  '2-6 f: ffffffbrfffp',
  '14-17 h: hhdhpphhhhhhkhhxqph',
  '7-9 x: xxxxxxxxqxxxxxx',
  '5-18 j: vlwgjljtljtrdbxjnjwm',
  '5-7 n: jmncnsndnbwx',
  '8-9 r: rrrrrrrrr',
  '11-17 j: jjjjjjjjjjjjjjpjr',
  '5-6 x: xxxxjt',
  '13-15 l: nshmnjgzhmjdzvl',
  '9-10 r: wmsvzxsrqnnhfr',
  '8-11 k: kkkxxrkpktg',
  '1-7 r: rrrrrrrfrrrjwrd',
  '5-7 t: rztvtvplbrk',
  '2-7 w: wwwwwwsw',
  '1-2 g: sgggk',
  '12-13 j: jjjjjwjjjjvvjjjrjs',
  '1-2 c: cccccc',
  '3-5 g: khgzr',
  '9-16 b: bbbbbbcbsbbbbbbb',
  '12-13 z: zzzzzzzzzszkz',
  '4-5 r: rkrrrr',
  '1-2 t: tgbqtddbmq',
  '1-2 w: wkwwwww',
  '14-15 q: qqdqqqqqqqqhqnb',
  '6-7 r: rrrrrdmrr',
  '8-9 j: jjjjjjjqhjjjjj',
  '3-6 t: gwmlntffstzllvs',
  '6-8 h: hhhhnhhhqh',
  '9-11 w: cwcwwwwwgxwwbw',
  '5-9 w: wwwwcwwww',
  '8-12 k: snjmkkhrgkkzkkpskk',
  '3-6 q: lvqjqlq',
  '3-4 z: zzzn',
  '9-12 t: dvmvhttxtmzhrr',
  '3-7 k: kkkkkkskkkkkk',
  '6-15 v: vqvvvdvvvvbvvvvvvvvv',
  '3-4 z: jzzzzzdk',
  '8-12 b: bbbbbbbbbbbs',
  '3-9 m: nvhwmwgmmqkbmmmzb',
  '8-10 r: npwjcgwrwcrx',
  '1-5 r: rxdrr',
  '6-9 p: ppppppsbkmppkp',
  '1-4 j: jjjqjjjz',
  '6-7 b: rblbbbbbbp',
  '5-9 t: tttttttttf',
  '8-9 c: czcccccccc',
  '13-14 j: jjjbjjtbjjjjjj',
  '3-8 p: pwppzqvp',
  '3-12 m: mmzmmmmmmmmmmm',
  '3-9 d: ddjddddddqddd',
  '3-4 q: qqfq',
  '6-14 m: mmmmmbmmmmwmmlmmmm',
  '3-4 c: glgzc',
  '6-7 t: ttttttt',
  '1-4 s: sssbs',
  '5-8 r: drrkrrrzrrrr',
  '10-12 q: rvqfqqkllqqqlfrq',
  '11-13 s: szsssssssssssss',
  '8-11 t: tttttttsttvt',
  '11-15 j: zjjjjjjjjjjjjjjjjj',
  '2-4 s: dvfs',
  '3-4 q: zhpq',
  '10-11 c: cccccccccckc',
  '5-11 h: pnrjhtdlkzvhh',
  '5-9 l: nlllxgnrlllllllmq',
  '3-4 f: gfff',
  '8-9 g: grgggggbg',
  '3-4 j: pfwjhh',
  '2-5 l: jlfjr',
  '2-4 l: lblv',
  '3-10 q: qqvzhnqqhqvqq',
  '11-15 t: tfttttttktwttts',
  '12-14 b: gqptrzwclbdbfqd',
  '1-4 r: crrprr',
  '5-13 v: qvdvvvdnrqmrqp',
  '9-12 r: rwrrlsrrsrrjgdnrrr',
  '4-6 c: ccldccnp',
  '16-17 q: qqqqqpqqqqlqqqqmlq',
  '2-8 w: wwwwwwwhwmwws',
  '3-6 m: dmmbmmdmkxm',
  '6-13 t: xflrtblvcvfxnlf',
  '2-6 m: pmnsmm',
  '13-15 k: kstfvnkkgfvvkbk',
  '4-10 w: jqwcwlcwcwvqbfzfzfm',
  '1-5 d: ddndbmjxhfqqn',
  '13-16 p: pzvbszhqtpklpkpdw',
  '2-4 t: thttwmxjsbtp',
  '8-10 s: zbsvjcssfmf',
  '3-5 l: lltlwlllll',
  '12-14 g: hgfvvfpnrvpfggnss',
  '3-13 q: cjmbvgxchmqdqcvc',
  '12-16 j: cjjjjjjjjjjqjjjjjj',
  '1-5 m: kqrgm',
  '11-14 x: xcjpwbrrffxkfxh',
  '12-14 c: kgfnccxqczkcjkcc',
  '3-4 f: sfftf',
  '1-3 f: ffdz',
  '12-14 t: xftfxmkttdsttg',
  '4-9 f: ffhcgfffffff',
  '9-10 b: zjlbbsbzbx',
  '9-14 m: hhxmlmmmzmmtmm',
  '3-5 t: tkcpzjwr',
  '6-9 k: wkfdwflgrntrknsr',
  '1-4 l: gfml',
  '9-10 z: zzzzzzzzzrzzzz',
  '9-11 h: hhhhhhhhhhzhh',
  '1-9 k: kkkkkkkkzkkkkkkk',
  '2-7 h: sswmmkhkvhw',
  '2-5 m: pmbnnmzrkk',
  '9-12 f: xhpfbfdffkfw',
  '3-4 g: gfwg',
  '11-12 n: nnnnnnnnnnnpnnnxn',
  '5-6 d: dddddgddd',
  '7-9 j: cbjgnjqjgj',
  '9-14 r: rrrrrrrhrrrrrzbrr',
  '4-5 p: prphk',
  '2-4 d: dpdd',
  '5-15 p: zjsppzhqqgqspcppqpps',
  '2-7 r: rrrrrrfwrr',
  '1-3 h: hhqh',
  '14-16 g: zgvdgspkjrrvcgdlxg',
  '4-6 c: psgqccccvc',
  '9-14 q: qdqjqmttdtcqggqpqn',
  '13-18 f: ffffffffffffgffffff',
  '8-9 g: gggggggggggg',
  '11-12 x: xxxxxxxxxxxr',
  '2-17 c: cxcccfchcccccccbbcm',
  '7-11 b: nwbrzndvrfxwt',
  '3-4 x: xhwxxxv',
  '16-17 r: rzrrnrrrvxrrzrrrrrr',
  '2-3 f: zcvgbmxvwp',
  '5-6 b: fwbbbf',
  '6-10 m: mmmmmpmmmw',
  '2-4 n: bnnvndbpvzj',
  '3-4 t: dftfhdngqp',
  '1-2 v: vtvvvvvvvvv',
  '2-3 v: vgvv',
  '9-10 s: tsvsshsssgssssmsksss',
  '6-7 t: ttttttxt',
  '3-4 c: jcrc',
  '5-8 l: ztlmjljlb',
  '4-5 w: bwwwww',
  '11-14 r: rrrbrrrrrrnrrrs',
  '10-16 z: zzzzznzzzwzzzzzzzz',
  '7-13 m: mmmmmmfmmmmmmmmmmmmm',
  '15-19 w: fflzcwftmcswcwwnwts',
  '10-19 b: bjbbbbbbmwbbbbbbbbtb',
  '14-16 x: xxxxpxxpxxqxdqxxxx',
  '8-13 r: rkzrjbxrgwkhnb',
  '5-18 r: rrrzfkrrrrrrrrtrrnrr',
  '4-5 b: bbbfzb',
  '6-10 q: qnscxqqfqb',
  '8-13 w: wwwwwwwfwwwwwwwwww',
  '10-11 n: scvnsnpgnjnmdpnwct',
  '7-11 p: pjpppppdqpjpfppsptp',
  '7-9 n: jfsvclhfm',
  '3-8 h: whsggqscd',
  '2-12 r: mrmpxhrqsdmqpjshvck',
  '2-4 g: gdgggg',
  '7-12 s: ssssssssgsss',
  '7-11 l: dlklllnjlslbl',
  '5-11 k: kkkkkkkkkkkkkkk',
  '6-9 g: dhtvcgmfrjhk',
  '4-5 m: lmmmhmsmmmmmcmmmmzmm',
  '11-13 t: zgtnkjzmtkttmtkc',
  '6-7 b: bbbbbbv',
  '3-4 q: qqcq',
  '12-16 z: zzzszjzszzczmxtzzcl',
  '2-5 w: wwfhp',
  '1-2 d: gddkd',
  '5-12 f: fwqgbvrcfmwb',
  '2-5 w: bnxcw',
  '3-15 t: ncwftppphsxvztttjs',
  '7-10 p: ppnsppkcppsp',
  '5-6 v: vvrdvv',
  '5-6 z: hczwbzz',
  '3-12 p: gcphfgmzfkflspmxg',
  '14-19 m: jmfmfjpvbmfmmrdkdnzp',
  '6-7 p: pdwzppppp',
  '4-7 b: bbbnbbqbb',
  '7-8 r: frrrrrxxr',
  '8-18 b: jbphpzgvnppwhkxfzs',
  '1-5 c: pvhcc',
  '4-8 z: fzznzjzztstzxrz',
  '5-10 v: jvvwvvvlvlvqc',
  '7-14 p: svgrzfpxkdpbhph',
  '5-7 n: nncmvkn',
  '11-12 r: rrlrbrrrvrrr',
  '1-5 r: vtngrndhqf',
  '2-4 k: knjp',
  '11-14 h: hhghhhhhhhxhhwhhh',
  '16-18 r: rrrrrrrrrrrrrrrpnb',
  '10-14 d: dpddbvdtdmxfdddd',
  '2-4 t: cztt',
  '5-6 r: rzrprd',
  '2-5 n: ngwdngc',
  '1-6 q: qqqzzwwqqqkqqq',
  '7-8 l: lllzllpxl',
  '1-4 b: kmltzzjzbppgwq',
  '1-4 t: ttttb',
  '3-4 p: dkxpcph',
  '7-15 z: zzzzzzhzzzzzzzzzz',
  '4-7 c: cdljfccm',
  '3-8 p: hbpxhlmc',
  '4-5 w: wwwlw',
  '14-15 b: lbqbbbkgbbwfbdb',
  '6-10 j: jtjjvpwwthwcsj',
  '5-8 t: ltvtttbtqxtzq',
  '12-13 t: ttttttttjttztxt',
  '16-18 p: ppppppppppppppxpxbpp',
  '4-7 n: nnnrnnnnt',
  '1-2 r: rfrr',
  '5-6 g: ggggvggg',
  '3-4 s: ssbw',
  '3-4 l: ldll',
  '8-10 m: mmmmvmmcjkmg',
  '10-18 w: wwvwwvwwhwwjwwwlwxcm',
  '1-2 x: cxxxxxxxxxxxxx',
  '1-5 b: bbbbkbbb',
  '12-14 z: zwqzrrzzvqqzzszrx',
  '1-5 z: lzzfzzzfz',
  '16-17 t: ftgstrgptwmptxrzt',
  '9-10 b: bbbbbbbzbbbb',
  '8-14 w: wwwwwwwjwwwzwzww',
  '3-4 h: qhnh',
  '2-12 d: dnddddkddddzdxdddd',
  '5-17 x: xxxxxxxxxxxxxxxxx',
  '9-10 h: hhhhtqhhhrh',
  '6-7 p: pfmppppp',
  '5-8 v: vbvvvvvs',
  '4-5 h: qhfhqcb',
  '3-12 d: dlddlhhwvcrdrxwpt',
  '2-3 n: nnwnp',
  '4-8 g: ggggjgfgzgdglgg',
  '4-9 h: vrghsphxhxzsxw',
  '12-18 z: qrzzzfwdcwnzdzkckz',
  '6-8 v: zvmlqwwh',
  '10-14 p: pppxwpndfpwppdpptmpp',
  '12-15 q: qqnqkqkqjgrcqfq',
  '2-4 n: pnszjnnn',
  '2-3 c: zkctcfc',
  '17-20 l: lvjlcclllslzllllwgll',
  '16-17 k: dfgskkfkkkfjhfvfks',
  '1-3 t: tjttltt',
  '2-3 b: bbzbb',
  '8-15 t: dtttttsttlttttzlttj',
  '13-14 v: vvkvvjvgwvvvkvf',
  '7-8 v: tvvvvvvhv',
  '3-10 d: bxktdrtddtdtsh',
  '4-12 j: npwxjjjjbjkq',
  '1-4 l: tlllll',
  '12-13 b: lbhpxbbbvbbbqbbbsbb',
  '9-15 v: vqhsggmpvmqtbzzlq',
  '12-14 f: ffhfjfffqfxqff',
  '15-16 m: jtnsjwpggbpxlhqmk',
  '2-4 n: xptncjsstcl',
  '5-8 q: dmwklqjqnzb',
  '3-4 c: vcgl',
  '1-6 h: hhhhhh',
  '8-9 x: ckblstcdx',
  '5-7 w: vwphwwmwwwww',
  '2-4 x: kxxxdh',
  '10-11 m: kmmvmmmfmksmj',
  '4-7 v: zvrvvvdvvv',
  '1-8 p: npxbwqpxbjrnrv',
  '5-11 t: jfkwttkstrxlgts',
  '1-2 g: ggggg',
  '5-7 p: tpppppr',
  '15-17 v: vvvvvvvvvvvvvvvvvvvv',
  '17-19 w: dwjwjznczwgfmkmhdtw',
  '10-13 f: fffffbqfffffffffff',
  '4-14 g: ggggggggggggggg',
  '2-3 d: bdkfd',
  '7-8 x: xxxxxxxx',
  '6-9 h: hmshdhvvhkhbhcshs',
  '14-15 g: gggggggggggggghg',
  '2-16 q: qqsxqqqdgqqghqqk',
  '3-17 p: ppbppprppppppppphppp',
  '8-18 v: vczfvqcvvcspndvxwjdv',
  '1-3 d: fdddd',
  '9-11 j: gfjjnjsdnhb',
  '8-10 s: hkhshttssl',
  '5-10 f: ffsffffffqxfff',
  '7-10 w: wwlwwckwwf',
  '4-8 x: blxxmtbgnblfgnfwz',
  '4-5 p: rlpkprppp',
  '13-14 s: ssssssssssssswss',
  '4-8 h: hhhdhmhhhjhlhh',
  '6-7 h: chhhhhfhzqhdhhh',
  '15-17 m: msvrmwzkzvmmgrmmpm',
  '4-6 x: qgtwwxhgsxxmklgmn',
  '4-7 p: rpzkdpp',
  '3-4 v: vvvhvjv',
  '16-18 p: pppppppppppppppppmp',
  '15-17 k: kpkkkkkhqkkkkklktk',
  '5-7 s: ssbxxsk',
  '2-4 l: cwllll',
  '6-9 v: cvvrrkvrvsdvfwcv',
  '1-7 w: qwwwwslwwwwwwwwrww',
  '2-12 c: clcccccccccccccc',
  '5-10 m: ftcmrpmvrzc',
  '7-11 w: wwwwwwwwwwtwwwww',
  '2-3 n: jngdlvgcvtkmn',
  '1-8 v: hvvvvvvvvv',
  '3-17 p: jrpvltxlcqgpfxwsj',
  '1-5 k: kkkkfkk',
  '1-10 c: cccccccccfc',
  '13-19 f: flfffffxfvffffprfmcb',
  '3-6 g: htglsbvrzcghjmd',
  '9-11 h: wrwghhhhnzhxl',
  '5-12 z: zzkzzhnjpmkvzzzw',
  '7-11 w: qrwcwwstwddw',
  '15-19 m: mmmmmmmmmmmmmmmmmmmm',
  '15-16 m: mmmmmmmmmmmmmmhmm',
  '12-16 x: xxxxxcxxxxxlxxxxxxx',
  '5-10 l: qwfqlllgsdjrlspll',
  '3-4 f: hffmfffg',
  '6-7 l: lwlllbllnl',
  '11-20 t: tttkrtlpttwftmwttttt',
  '11-12 d: ddbdddddddpktdd',
  '4-11 w: sxkmkwdwwnlwxmdvfx',
  '4-5 k: kkzkpk',
  '13-20 n: nnnnnntnnnnnbnnnbnnn',
  '5-7 c: ccccwcc',
  '1-6 h: cckkhhdhhwmhhmzchhwx',
  '1-15 b: hbbbbbbbbhbbhbbbbnbb',
  '1-2 w: mwwww',
  '1-2 f: sfzgwtf',
  '3-4 s: sssj',
  '1-3 w: xwww',
  '1-16 p: ppppppppdppppppp',
  '1-6 c: ccxmccccc',
  '4-8 b: rtpbcfbr',
  '9-10 s: sszssstshss',
  '15-16 x: xxxtxxxxxxxmxxxzx',
  '9-15 k: kkkkkkkkkkgrkkkkk',
  '11-13 x: xtxxxxxxxxrxkxx',
  '1-5 f: rffflfffnf',
  '14-16 n: nnxnnnnnnnnnbnzbnnn',
  '3-6 d: ddddddndbdfdhd',
  '14-15 q: sbqqhvqqqvqgxfq',
  '5-6 b: jglbfjb',
  '1-10 l: llllllcllsll',
  '3-5 z: lwzzz',
  '5-12 k: kkkkmkkkkkkkkkkl',
  '8-12 v: vvtsvfvnzvhpm',
  '5-7 l: llllllll',
  '4-7 f: nqfffkbdf',
  '4-8 j: jjjljkhj',
  '9-15 h: vgzpgfhfhmwdhbqc',
  '1-5 p: ptpsjqpnp',
  '5-8 q: qbqqwqnq',
  '5-7 w: wwswwxsb',
  '3-6 h: nnhrnhkmxqkt',
  '1-3 w: jwwww',
  '2-14 x: cxxxxdxxxxxxxbxx',
  '12-14 x: xxxfxxxxqxxrxt',
  '4-9 f: fffkffbsfkxv',
  '12-13 m: mmmmmmmmmmmwm',
  '6-10 p: ppppphpppxppp',
  '9-12 v: vsvvvvkmjvvvn',
  '3-12 r: shngvhbmjrpr',
  '12-13 w: wqwcwxclwwwfw',
  '4-5 r: nnrrdz',
  '4-19 c: vbcpwzvxssccqkqgmxvj',
  '1-6 g: tglxhggng',
  '9-10 z: lvzhvtglzf',
  '10-16 f: gddxfftggfbmxwts',
  '4-12 k: kkkklkkkkkkpkkk',
  '7-11 m: mmmmmmmmmmtm',
  '2-10 z: vkfpjrrvlwlbjwk',
  '3-7 w: dtdzwjqgxdwjhchwwd',
  '13-14 v: vvvvvvvvvvvvvvvv',
  '11-12 c: cjccccqccccc',
  '14-15 h: hzhrhkhfthrhxht',
  '3-5 v: dtwvvvvvcvvvrvsvvv',
  '10-14 q: qhqqkqcqqqqqlfqgsqq',
  '3-14 f: ffvffffffffzffffff',
  '1-12 x: xxtxjxzxxxxxlxxxxxxx',
  '2-4 c: pgpc',
  '1-4 r: fdrr',
  '5-7 r: rrrrrrt',
  '10-11 d: drdddddddmddddpd',
  '2-5 f: gfrlctftzr',
  '10-13 z: nrzjjrzjzzplzmzzbn',
  '8-10 c: cccccccgbc',
  '5-8 g: fgggcndwgggbjnfgb',
  '6-9 d: ddddghdgbddm',
  '3-7 j: ftjjjvjqcp',
  '5-6 s: sqvfstz',
  '5-18 k: kkkwkkkkkkbkkkkkkkbk',
  '3-6 f: djffffkff',
  '4-6 p: pqppppr',
  '5-9 h: hhkhjhmgcqvfhqvhn',
  '8-12 t: tttttttvttttt',
  '14-15 z: pzrzhjqmtbcnzdzr',
  '1-17 s: ssssssssssssswsss',
  '1-4 s: ssqh',
  '1-5 r: rrrrrrr',
  '17-18 h: hhhhhrhcxhhhhhhhhb',
  '7-9 t: dttttjmtv',
  '1-3 c: mcccp',
  '4-5 x: xprbxql',
  '1-5 q: cqqqqqq',
  '3-4 g: ggggw',
  '1-7 f: ffffffnf',
  '7-9 t: ttttttttttt',
  '11-15 m: mmlmfmmmmmmmmmmqm',
  '4-5 n: npnnnn',
  '4-5 b: zvbbvbjhlkf',
  '11-16 c: gnqmcvtzwpcbvncwcc',
  '12-18 q: qbqkwqqvqwqqnljsqpqt',
  '6-10 r: wcrtdrlkgjr',
  '16-17 p: gppppppppwvlgpptp',
  '1-13 g: gqghbwqqzwwdk',
  '1-6 l: rlllll',
  '3-7 j: pdjjtcqwbqtpfkjbwgq',
  '7-17 z: zzhsnjrhrzzfrqszdhdg',
  '6-7 n: xnvnhnrn',
  '6-7 r: rrrrrrzr',
  '2-3 c: ccmcccc',
  '2-3 v: vvdv',
  '3-9 f: mlfffshbfdff',
  '11-13 v: dfvkltvjvvvvx',
  '12-13 c: mqrccccbccbgcccccvc',
  '9-13 w: wwwwwwwwwwwwcwtww',
  '6-8 d: pdvgddtmvwdkvdtzf',
  '1-9 s: hsssssssssdsls',
  '1-5 c: zbsslcd',
  '1-4 p: bpppppppppp',
  '13-16 s: sssxslsscssbqsspcs',
  '1-10 p: pskwpppzpppppks',
  '3-5 c: ccppccmcc',
  '10-11 b: rhbbbbbbbzbb',
  '2-3 d: ndhjhd',
  '3-4 s: sscs',
  '5-6 d: dtwwnt',
  '4-5 d: dddddddd',
  '5-9 z: zztzvzzzz',
  '2-6 v: vpqdll',
  '13-14 d: nxkmbkkpxkcdld',
  '1-3 s: ssss',
  '8-14 z: zzzzzzzzzzzzzbz',
  '16-17 f: fffnffffffftbzffpkf',
  '3-4 m: mtcm',
  '3-4 r: mrdrd',
  '11-13 k: ljkmhdkkkcpjzlmkkzkk',
  '2-3 d: tdqnxpd',
  '3-7 h: mrvdlthxchpvwvssqpk',
  '13-17 j: jjfjjvjjjjjzjsjjksxr',
  '1-4 n: rnnx',
  '7-10 m: mmmmzmxfmm',
  '1-6 r: lrrvrrrrm',
  '4-18 r: rrrdrrrrrrrrrkblrr',
  '6-7 k: kkkkkkl',
  '4-6 v: vmnfvvvvmcmlh',
  '6-9 g: jgcgggkbbmgbs',
  '7-8 t: ttcfwtgjtcttv',
  '3-4 j: tjjj',
]

const babyInput = [
  '12-33 a: abcde',
  '1-3 b: cdefg',
  '2-9 c: ccccccccc',
]

const format = (inputs) => {
  let totalValid = 0;
  for (let input of inputs) {
    const data = input.split(' ');
    const lowLimit = data[0].split('-')[0]
    const highLimit = data[0].split('-')[1];
    const letter = data[1][0];
    const password = data[2];

    let count = 0;
    for (let char of password) {
      if (char === letter) count++;
    }
    if (count <= highLimit && count >= lowLimit) totalValid++
  }
  console.log(totalValid);
}

format(input);