const testInput = `
SXMXXMXMASXXXMASXXAMXMMXSAMAMMMXSXMSASMMMXXSMSAMMMMXMAMXASAMAMXSAMXAMXXMXMXMMMSXMXSAMXSSXASXMASMSXMASMSSSMMSSMMXMASMSMMMMXMMSAXXMXXSXSXXXXXX
MXMMMSAXSAMMMXMASMXSAXSAMXMASAMASAMXMAASMMSXXSAMXSAMMSSSMSAMASASMSSSMXSSSMXSAAMMXMMASAMXSAXSMSMXMAXAMAAAAMSAMASMSAMMASAAAMAAXXSMMMXMAMAMSMSA
SAAAXSASMMAMAXXAAXXSASMASXSASASASXMAMXMMAXSMXSAMXMAXSAAAASXMAMASAAAAAAAXAAASMSMMSASXMASAXXAMXMSMSMMSMMMSMMMAMMMAMAXSASXMSAMXSMXAXMASAMAMAAXX
SSSSXXXMASMSAMSSXMAMMMXXMAMAMAMAMASMSMASMMXMASMSMSMMMXSMMMSMXSAMMMMMMASXMMMSXAAASXMXSAMASMMXAMAMAXXMAAXAXSXXXSMXSAMMMSXSMMSXMAMSASXXXSXSMSMX
XAMXMMXSAMXMAXAAASMSMSMMMXMXMSMMMXMAXMAMXMAMMSAAXMASXMAAAAAXAMXSXXASXMAMXSMMAMMMSAMXMAMAMMMMSSMSMSMSXMSMSMXMXXAAMAMXXSXMAMSXMSMMASAMXSAMXAAX
MAMAXMAXAXSMSMMSMMAXAXXASASAAXAAMAMXMMXSASAMXMXMXSAMXXXSMSSMXSAXMMMXAMSAAXAXAXAAXAMXSAMXMXXAMMXSAAAAXMXMAXAMXMMMMMMXMMAMSMMXSXMXSMAMAMMMSMSA
MAMMMMXSSMAAAXAMXMMMSMSAMASXXSAMSMSAXSASXSMSSMMXXAMMMMXMMMAMMMXXSASMSMMMMSMSMSMXMAMAMXAAAMMMSMAMXMMMXSASXSASASMSAAMSSMAMXAMXAXMSASAMXSMXAMXM
XSXSAXAXXAMSMSMMAMXMAAMXMXMMMMXXMASMSMMXASAAAAMXMMXAAXAAAMMMSMMMSAMAMXAAAAAAAXAMSAMSMMSSSXXSAMASAMASASAMXSMXXXAMXMSAMXSXSAMMMXSAASXMMSAMMSAS
XMASASXMXSXXAMASAMAMMSAXMAMXSSSMMMMMXASXXMMSSMMMAXSXMSSSMSMAAXAXMSMAMSSSSMSMXMAMXAMXAXAMAMXSASASASMAAMMXMMMXSMAMAXMAMAAAMMASXMAMMMMSAXMAXMAS
SMAMAAMXMXAMMMASASASXMXXMASAMAMSAXAXXAMXAXAXXXAXSAMMMMXAAAMSSSXXAMMMMMMMMXAXAMXSSMMSSMMMSAMSMMMSMMXMXMAAXAAASMMMSSSMMMMSMSASASMXXAAXSXMSAMMM
SMXMMMXSXMXMXMASASASASAXSAMMSMXSMSSSSSMSSMAMMXMSMASXAASMMMMAMXMMAMMASMMASMXSXSAAXAAAAAAAMAXXXAXMAXAXMXSMSSMMSAXAAXAXXXAAAMASAMXMASMMMMXXXMAS
XXXXASAMXXAAMMMSAMAMXMAMMXMMAXMMMAXXAAAAXXMMAASMXAMXSMXXMXMXMAMXAMSASASAXAMXAMMXMMMXSMMSSSXMSMSMSXMAXMAAAXMASMMMXSMSMSAMXMAMMMAAMMXAAAAMASMS
MSMMXMASASMSMAAMXMXXAMSMXXXSAMAXMXSMMMMMXXMMXMSAMMSXMMMMMSMSMSSSMXMMSMMMSMSMXMASAXSXMAXMAXAAAAAAXMSXMAXMXXXAMXAMXMAMXMAMXMAMAXMSMSXSSSMMAMXX
MAAXXSAMMXAAMMMSMMSAMXMSMSMMAXSAMMAAASAXMAMASAMXMASAAMAAMAAAAAMASXSMMAAXAAAAMXAASAAASMMMAMMSMSMSMMAMMMSSSMSAMAMXAMAMASAMASXSMSAAAAMAMXMMSSMX
SSSMMMSSXMMMSXXAAXAAXXMXXAAAAXXAMAMXMMAXAMXXXAMXAXSSMSSSSMSMSMXAMXMAXSMSMSMMAMAXMXMXMSAMXMXAXAAXXXAMAXXAAAAAXSSSMSASXSAMXMAAAMXMMMASAAMAMAMM
MAAAXAXMAXSAXMSSSMSSSSSSSSSMSSSSMSSSMSSSSSMMXAMXAMMAMAAAXAXMXXMSSSMSMXASXXMMXAMXSMMMAXXSSSSSXMSMMSMSSSMSMMMSMAAAXSAMAMMMAMMMXMAXMXMXMSMAXAMM
MSMMMSMXAMMMMAXAMMXAAAAXMAMAAAXMAAXAAAMXAAXMASMSMXSAMMSMMMMXMASAAAAAXMAMMSAAXSSMSASMSMAXAAAMSMAAXXAAAMAMAMSMMMMMMMMMSMSMSASMXSMMMAXASMXSMMSS
XMAMAAMMSXMASXMMMMMMMMMMMAMMMMMMMMSMMSSMSMMAXXAMXASASXMXSXAASXMMSMMMXMSMAMMMSXAASMXAAMMMMMMMAMSSXMMMSMMSAMMAMXAXMXAXMASAMXSXAXXASMXMMAXMASAM
ASAMMMSAMASAMMAAXXAXAAXAMASAAAAAAXXXAMAMXXMSMSSMMXXAMAMAMXXMSMMAMXAMSMAMMSAXXXMASMMSMSMASXMMAXAMAXXXAAXSAXSAMSMSSSMXMAMAMASMMMSASAASMSMSXMAS
XSASXAMAMMMMXSSMSSSSSSXSSXMMSSSSMSSMXSMMSXXMAMAASXMSXMMAMMSAMXMXSMSMAMAMASMSMXXAXXAXMAMASMSMXMASXMSSMSMSSMMXMAXSAMSAMASXMASAMAXAMAMSAXAXMXAA
AMAMXXXSMSASAAAAXAAMAXAMXMMAMXMAMSXMASXASMMMSMSMMAAAASMXSAAMSMMMSAAXMSXSAMXAAASMMMMXSAMXSAMXSMMMAXAAXXMXMXAXSMSXMASXXASXMASAMSSMMMMMMMXMXMXM
SMAMMSXMXSASMSMMMMMSAMXMAMMAMXXXMXAMASMMMAXAAXAAMSMSSMAMXMAXAASAMSMSXAASMMSSXXSAAXXAMASXMASASAAMSMSSMMMAMXXMAMXAXAXMSMSAMASAMXAAAXAAXAXSXMAS
MXMXXMASAMXMAAXAAAXMASXMASXMSSXMMSXMASAMSSMSSSSSMAAMXMXMMMMMSXMAXASAMXXXAAMMSXSXMXMMSXMASAMXSMMMMAMXAASASAMSSMSAMXXXAASXMASMMSXMMSXSSSXMASAS
SASXXSAMASAMXMSSSSMSAMXMASAAAXAAAAAMXSAMXMAXXXAMAMXMAXAMAAAAMASMMMAMXSXMMMSAAMMAXMAXMXXXMXSXSXMXXAXSSMSAMXXAMXSAMASAMXMAXAMXXMAXXXXXAXSSMMMS
SAMAAMXMXMASXMAXMAAMXXAMSMMMMSMMSSSXASXMAMMMSMSMXMAMMXSSSXSASMMMXMSXAXMASAMMMASAMMSXSMSAMXSAMASMSMMXMAMXMSMMXAMAMMSXXSSSMMSMMASMAMSMAMXMAAAM
MAMMSMSSMMAXMASMMMSMMSXXASAMXSAAXMXMASMMASAMXAAAASMMSAAAMAMXAAAMMMMMXSMSMASAXMMSSXMAMMAMXMXASXMAAXAAMAMSSXAAMMSSSXMXMMAMXXAASAMMAAAAXMXSSMMS
SXMAAXXAAMAXXXXMAAAAMASMSXXMASMMXMAAAXAXASAAMSMSMSAAMMMMSXMMSSMSAAAMXSXAXSSXXSAAXXMASAMAASXMMMMSMMSXSAXSAMMMMMAMAXXMAMAMMMSXMAXMXXMSAMXMXMAX
MAMSSSSSMMMMSMASMSSSMASMASAMXSXXASXSSMSMMMMMXXAAMMMMXXXMAMXAAAMSMSASAXSMMXXAMMMMSXSASAXXXSAMXMAAXXMXSXSXSAXAXMMMMXMAMSAMXAXAMXMMSMXXAMASAMXM
SAMMAAXXXMAAAAMMAMMAMXMXMASXAMAXXXMAXAMAAXXSMSSMSMASMAXXMSMMXSMSAXXMMMMSASMMMAAMXAXASAMSMSAMAMSSSXMAMMSAMXMMSSXAXMXSXSASMSSSMXSAAXAXSMASMSSS
SXSMAMXMAXMMSSMMXMSMMAAXSAMMAXSXSAMXMMMMXSXAAAAMMMAMAMMXMMMSXMAMAMSMMMAAXMASASXSSMMMMAMAAMASXMAMMAMAMXMAMXSMAMSMSMAMAMAMAAAAAAMSSMMAXMXSAAAS
SXSAMMMXMMMAMAMXAXAXSSSXMASMSAMMSAMASMSMAMMMMMSMMMAXSSSXASAXAMMMSXXXAMXMSSMMAMAAXMASMXMMSSXMXMAXXAXASXMXSXXMAMAMAMMSMSAMMMSMMMXMXXMASAMMMMXM
XAXMMMXASAMMSAMXMMXXXAXAMXMAXMSASAXAXAAMASASAXMAMXMXAAMXAMMSAMAAXAMMMSXXMASMSMMXMSAMXMSXAMASXSAMMSSMAASAMXXSMSMMAXAAMMAXSAMMMSMAMXMMSXMASMMS
MMMAAXMASXSXSAMXSMMSMAMAMMMXMXMASAXSMSMSXSASXXSAMASMMMMMSAXMASMSSSMASAMXSAMMXMAXXMXSAAXMXXAMXMASAMAASXMAXAMXAAMMMSMSSSMMMMSAAASAMASXSAMXSXAX
AASXMSMAXAXASMMMSAAXXXAAMMSMMXMMMAMXAAAAAMAMAXSXMAXAMAXXXASXAXAAXMSXSAMAMAMMAMXSMAMSMMMSMMXSXSAMXSSMMMSAMSSMMXSAMSAAAAAXAXMMSXSXXAMAXAMAMMSS
SMXAAXMMMMMMMXXAMXXMMMMMSAAAXAMSMAMMAMSMMMAMMMMMMMMMMXXXMASMSMMMSMSXSAMMSMMSMMAXMAMXMXAAAAMMAMMMAXXAMMSAMXAXMAXASMMMSMMMMSSMXXMMMSMMXAMAXAAA
XMMMXMAMAXAAXXMSSSMMXAAMMXXSSMSXAMXXAMMMSXXXAAAXMXAMXMMSMXMAXAAXAAMASMMAAXMAMSAMXXSAAMSSMSSMAMASMXMXMASMMXXMSSXMMMSAXAAAXAAASAXMAMASMSXSMMSS
MAAXXMMSSSSMSAMXAAXASMMSASMMAMMMMMXMASXASASASMSSMSXSASAAAAMXMMSMMSMMMMSXMASAXMASAMMMSMMAMAAXAMXAXAAAMMSASXSAAMAXAXMASMSSMSSMSAMMSMAMAXAXMAMM
AMSSXSAMMAAAAMXMXMMXXAAMAMASAMXSASXSXMMMMAXMMSAAXAASAMSXSASASMXAAXAXXXAAXAMXXSAMAXXAAASAMSMMSSSSSMSXSASAMAMSMSMMXXMXMAAXMAXAMXMAMMXMAMSMSSSS
MAMAMMASMAMASMAAASXSMMMSASMMMSXSASAMXSXMXMXXMMMXXSMMXMAXMXXASAXSSSMMSMSAMXXAMMSSMMMMMMSXMXAAMXAAMXMAMXMAMXMAXAXSSXMMMMMMMMMXMAMASAMMXSAAAAAX
SXMAMSAMXXXAXMXSAMAMAXAAAMXAXAAMMMAMAMXSAMMSXMXXMMAMXMSSMAMSMMMXAAXXMAXXMAXSXAAMXAMXSMMMMAMXSMMMXAMXMMSASMXSSMMAMAMXMMMAASXSXSMAMAMAXSMMMMMM
AASMMMAMASMMSXMMXMAMAMSSMMSMSMAXXXAXASMSASAMAXAAXSAMAXAAMAMAAXSMSMMSMMMMMMXXAMMSXXXASAAXMAMXMAASXSXMAXMXMAMMAMXMSAMAMSASAXAMAXMMSSMMMSXMAMXM
SXMAXSAMXAAAAMMAMSXMAMXAAXAAMXAMXSMSXMASAMXSAMXSMAMSXMMXMMSSSMMMAMMMAAMSSXXMAMMMMMMXMMMMMASXXSMSAXSAAMMAMXMSAMMXMXMMXAMMXMAMMMSMAMAMASMSASAM
MMSSMSXSSSXMSMMAMSASMSXSMSMSMMSSMAXSAMMMMMMMASXAXMMSMXSAMXMMAAASASAMSMSAMXXMXMXAAAAAMXXSXAXMAXXMAMASAMSMSMMSAMMSSSSSSMMASXMMMAXMAXXMAXXMMMAS
AAMXASAMXAMMAXMAXMMSAAAXASAXXXAAXXMMAMAMSAMXAMAMSXSXAAXXMASMMMMSASAXAXMAMMSSMMMSXSSXSAASMMMXAMASASMMSXAAXXASMSAMXAAAXXMASMAAMMSMMSMMSSMXSMMM
MSSMXMAMMMXSASMSSMAMMMSMAMXMMMSSMSASMMMMSASMAMMAAXMMMMSMMMMMSAASAXMMSXSAMMAAAMAXMMAAMMSMAAAMASASASXAXSSSSMXSAMASMMMMMXMASXSMSSMMAAAMAAMMSAXX
XMAMMMMASMMMASXAAMXMAAAMAMSSMAAXMMMAMXXMSAMXAMMXMASASXXXAMAAXMMMAMSAMASXSMSSMMASAMMMMXAMMMMAXXMMMMMMXAMAXXSMXMSMXSAMMASXMAXSMAAMSXSMXXMASAMX
AMMMMAAMAAAMXMMSMMMSMSSSXMAAMSSSXSXSAXXAMXMSSSXAXXXAXAXSXMMSXMXMMMMASXMAMMAAXMXSXMASXSMSSMMSMMMAAMAMMMMAMMMSMXMAMSASAASXMAXASMMMMMXXSMMMSSMX
SSMMSASMSSMSMAMAXAAAXXXMAMSSMMXMASAMSAMXMAMXAMXSXMMMMSMMAMXXAMXXMSMXAASXXSMSMSMSASXAXSXAAAAAAAMMMXMXASMSSXAASAMAMMAMMMMAMSMMMXSASXAAXAXXXMSX
XAAAAMXMAXAAXAMXMMMMXMASXMAXXXXMAMAMXXMAXSSMMMAXAMAAAAASXMASMMXMMXSMSXMAMSAXAAASMMMMMSMSMMMSSSSXSAMXASAAMMSMSXXAXMXMXASAMMASAMMASMSSMMMSAMXM
SSMMSMSMSMSMSMSXMSMSASAMAMMSMSMMAXSMMMSMSMSAXMAXAMSMSSMMMSMSXSXAXAMMMAMXAMXMSMMMSAAAASAMMXAMXXAASAMMSMXMAAAAXMXSSSSMSMSASXXMAXSAMAAMAMAXMSMA
MAAMXAXAXMXMXAMMAAASAMXSXSXAAAAMMSMAAMAMAASXMMSSSMXXAXXAMAMXMMMSMASASXSXAXMAMXXASMXXXMAMXMMSSMMMMAMXAAXXMSSXXSAXMMAAAASXMAMSAMMASXMMMMSMXAXX
SSMMMMMMMMAMMSMMMSMMXMMXMAMMXSSMMAXMMSASMMMAXMAAAMMMSMMMSASXXMAMSAMASASXMSXSSSMMMMMXAMXMASXAAAASXMMMMSMXMAMAAMMSASMMMXMMMSAMXSSMMMXSSMAMSMSA
MAMXXAAAASASAAXAAXAAMSXAXXASAXAXSAMXXSAMXMAMAMMSMMXAXAAAMAMAAASMMXMXMAMMMMAAAAMXAAAAMSAMXAMSSSMSAAAXSAMXMASXSMXSAMMAMSMAMXSMAMMMASASXMAXAAMM
SMMMSXSSXXAMMMSMSSXMAXSXSSMMXSAMMAMSMSMMMMMXXXMMMXMSSSMSSXMMSMXAMAMAMXMSAAAMMMMSMMMXXAASXMAMAXASXMAMXAMXMAMAXAXMMMMAMASASMMMMXAMXMMMASMSMSMM
AXAXMAXXMMMMSXMAAMAMMXAMMAXSAMMMMXMAAXXMSASAMXAMSSMAXAAAAXSXXASMMASXMMSSXSXSXSAMMAXSSMMAMXXMAMXMXXMMSSMMMSMXMMSMSASAXMSXMAASMSSSMSXSAMMAMXMM
SSSSSXMASXMXMAMSMMXAMXMAMAMMMSASMMXMSMXAXASASMXMAMMASMMMSMSAMXMAMAXAAXAXMMMSXMASXAMXAXAXMASMMMSXXSAAAMAAAAXASMAAXAXMSMMMSSMMXAAAXAXMAMSXXAMM
AAMAMXMXMASMMSMMAMSXXAXSXMSAXSMSAAXSAMXSMAMAMMAMMSMXSXXXAAMSMMSSMAMSMMMMAXAXAMAMMSMSAMSXSAAXMASAASAMXSSMMXMASMMSMSMMAAAMAMXSMMMMMMMXMXMASMSM
MXMAMMMMXMXXAAMSSMMMMSXXAAMXMXXSMMXMASAMMAMMMSMMXAXAMXMSMSMAMMAAMAXMAMXXSMMSSMASAMMMSMAAMXSAMMMMMSSMXMASMAMSXMAMAMXXSSMSASASXSAXASAMSAMXAMAX
SMXAXAMXASMMSXMAAAAAAXASMMMSXSMSXSMSXMASXXSAAAASXSMMSMXAMAXMSMSSMXSXAMSMXAAAAXSMASXAAMMSXSMMSSXSXXAMMMAAMXMXAASMMMSXMAMXAMASASMSAMAMSASASXSM
AAMXXMMXAXAMXXMXSSMSMMMMXAXXAMAMASAXXMAMAAMMMSSMMMAMAASMSXSMAXMAMXAMAMXASMMMSMXMAMMAXXXXXMAASXAMASMMAMSSMMSMSMXAXAMXMMSMMMAMAMXSAMXMSAMXXAMX
ASASXSMSSSSMMMSMMMAAXAXMXXMMAMAMMMSMXMASMMMSAMXMXSAMSXMMAMMXSSSXMMSSXSMXMAAAAMAMMSSMMSAMXSAMMMXMASXSMMAAMASAMXSSMMSAMSXMSSSMMMASASAMXSAMMAMM
AMXMMAAAXXAAAAAAAMSMXMAMSMSSMXXSAXMMSSMSXXAMASASMSXMMASXAXMAXAMXMAMMASXMMSMSXXAMXAAAAMASAXASMSAMAXAMXMSSMXMAMAMXAAMAXSAMXAAAXMXSMMXSAASAMXMA
XXMXSMMMSSSMMSSMMMAXSSMXAXMAASMMMXSXAAXMXMXSMMASXMMMSAMSMSMMSAMAMXSMAMASXMAMMSMSMSXMXSASMMSMAAMMMMSASAXXMASAMXXXMMMSMSAMMMMMMMXXXXAMAXMSMXXS
MXAXXAAXXMASXXAASXMMXAXSXSMMMMAASMSMSSMMMSAMXMASAXMAMAMAXAMXXXXSAMXMASAMAMXAMAAAAAASXMASMXMMMMXMSAXAMXMXMXAMXMSSXSAAASAMSAAAXXMMMMSMSMXAXMAM
SMSXSSMSXSMMSMSMMAXAMXMAAXAXSXSMMASAXXAAAAASXMASXXMAXMXMXSASXSXMAMXSXMASXMAXSMSMSSMMAMSMMAAMXSAAMMSXXMASMSMSMAXAAMXXXSAXSXSSSXAAAXMAMXSMSAAM
AMMAMXAMXSXMAMAMXXMSAAAMMMMSAAMXMAMXMXXMXMMMMMMXXAMAMSXSMXMSAMMSAMXXMMXMAXSMXMAMXMXSMMMASMSMAMMSMAMXSMSAMXAAMXMMMMSMAXMMMXMMMMSSSXMAMASAXXSA
MAMASMMMASAMMMSMMXSMXMSAXAXMMMMAMXSAMSSSMXMAMASMSMSMSMASAMXMXMAMAXMASMASXMMAMMSXSMASMAMMMMAMXMMXMXSASXMASMSMSXXXAAAMXMSASASAAXMAMXMASXMAMAMX
XMSAMMAMMSAMXAAASXMSSXMXMASMMMSAMAMXAAAAXASASASAMAAXAMXMMASAAMSSSMSAMSMMSXMAMAAMXMAMMAMXAXAMMMSSMMMXXASMMMMAMXSSMSSMSASASASMSSMAMXXMMXMMXXXX
XXMMSAMXMMAMMMMSMAAASAMXSAXAAXMAMSSMMMSMMMSAMAMAMSMSSSMMMASXMSMXMAMXXXXAMMSXMXSSXMASXMSSMSMXAAMAAXMXMAMMAXMAMAXAAXAAMAMAMAMAMAMSSMSSMSXMASAA
MMXMXMMSXSSMMSMXXSMMSMSMMMSMMXXAMXAXMXMMSXMAMSMSXAAXAMMSMASAMXMAMAMMSMMXMAXAXAXAXMASAAAMMAMMMSMMMMMAXAMMSXSAMMSMMMMMMMMMMXMXSAMXAMAAAAAMAMMX
AAAMMSXSAXAAAMAAMXAAXMAAAAAAAAXSSSSMSMAMMXMXMXAXSMSMMMSAMASAMXSASASAMXSSMSSMMMSMMMMMMMMMMASAMAASMSSMSASMMMSXSXAAAAAXAAAMMXMASMSSMMSSMSXMSSXS
MSMSASAMXMSMMSMMMXMMMAXXMMMSMSAMXAAAMSMMMSAMXMXMASAAXXSASMSAMXSXMAMAXAXAAAMMAMAXAAAAAMMMSASASMXMAAAASAMXMASXMXSSSSSSSSMMAAMXSAMXAAAAMXXAXAAX
MAMMXMMMMXMMAXAMXXSXSSSSSSMMAAXAMXMMMAMXXSAMSAMXMAMAMMMMMASAMXMXMXSSMSSSMMMSASMSSSSSXSAAMMSMMXAMMMMMMAMSMAMSMAXMMAAXMMMSSXSAMAMSMMSMMAMMAMXM
SASMMXMAMASMSSSMSMAAAAMAAMMMSMSXAMSMSASAASAMSMSAMAMMMAAMMMMMSASXSAAXMAXAAXXXAMMAAMXAMXMMXAMMMXMXSAMSSXMXMASAMXXXMMSMMSAAMSMXSMMMMAXXMXMXXSSX
SASAAASASAXMXAAAAMMSMMMMMMAAAXXAXSAMSASMMMMMXASMXMXASXXSAMXMSASAAMMMMMSSMMMMSMMSSMMMMMSSMMSAMXSAMAAAMAXMAMMASMMSAAXAAMMXSAXAAMASMASASMSSXAAS
MMMMXXMAMXSMMSMSMMXXAXMMMSMSSSXXMMXXMMMMMAASMMMAASXMXAMXXXAMMAMMMSXSAXMASAXSXAAAAMXXSAAMSXSASAMAMMMAXXMASXSMMAASMMSMMAXMAMAMASASMMSAMAAMMSMX
SSMMXSMXMMAXXXMMMXXSXMASXAAAAMAMMXMAMMAMSSXMAMMSMSASMSMSSSMSMSMMMSASXMSASXSASMMSMMMAMXSMSMSSMASAXSXSSSSXMMAXMMMSAMXMSSSMASMMAMMSAMMAMMMMAAXS
AMASAAMMSSSXSMASAAMAMXAXSMMMSMSAASMMSMMMAXMMSMMMAMAMXXAAMAAAXAASXMAMAXMAMXMMXSMMMSMMMAXAXXMAMMMMXMAXAMXAMSSMMSXSXSAAXXAMXSAMXSASAMSXMAMMXSAA
MSAMMSXAMAMAXSAMMXMAMMMXMMAMAXXSMSAAAASMMSMAMAMMSMMMSMMMSMMMSSSMXMAMMMMXMMXAMXXAAXAXMAXMMMSXMXAMXMMMAMMMMAMAXAAMAMXMASMMXSMMAMMSXMMMSASXMXAM
XMASXMMSSMMAMMMSAASAMASAAXMSMSMMXSMMSXMAAAMASAMAXMAAXAXXMAAXMMMAXSXSAMAAMAMMXMSMSMXMMMSSXXAAMSAMXSXSAMAXMASMMMXMAMAXMAXXMMXMASASMSMASASXMXMX
SMMMAXMAMMMXSSMMMMMASXMSXMAAXAASAMXAXXSMMASXXAMXSSMSSMMSXSSMSAMMMSASMXMXMMAXSAMXAASMSMAAXASXMAXXAXXMAXSSSMSAAAAXAMMXXSXSASAMXMXSAAMMMXMASAMX
SASMSMSASMSSMXMASXSXMMMAMSSMXMXMMMMMSASAMXSASMMMMAMAAXAAMAMASAXSAMXSXMXMMSSMAXSMMSAAAMMMMMMMSXSMSMMMSMXAAMSXMMMSASXMXAAMAMASMMMMXMXMSASASASM
SAMAXASASAXAXMMMSAXXAMMMMMASXMASASAMXAMAMMMMMAAMMAMSSXXMSAMAMSXMXSXSAMSAAAAXAMMASXMAMMAXAXAAMMXAXXSAMMMSMMSXSAMAAMAASMMMSMMMAAXMASXASASXSAMX
MAMXMAMXMMSMMAXSMMMMSMAXXSAMXSMSASXSMMXAMAAASXMMSMMXMXMXXMXSXMMSMMASAMMMMSXMSAMXMAXSMSMSSSMSSMMSMAMASMXXAMSAMXSMMMXMMAXXAASMSMSMAXMMMXMXMAMM
XXMXMXMAAXSXASXMAAXAASMMXMMXAMXXASXXAMSSSSXMMXAXAMSMMMAMSMAMAMAAAMAMAMXSMMXAXMSASMMXAAXAAAMAAAMMMXAXAAASAMMXMASAMXAXXXMMSSMAMAXMAMSASAAXMSMS
MMXXMAXXSMSMMMSMAMSSMSMMSAAMSMMMMMXMSMAAMAXSMSAMMMAAAXXSAMMSAMSSSMXSXMXMAMMXMXSASMAMXMMMSMMSSXMXMXMMMMXSMMMMMXSXMXASMXSXMAMMMMXAXXMAMMMSMAAX
ASMMXSSMXXSAXAAXAXAMXXMASMMXXAMAMAXXAMMXMXMXAXXAASXSMSMSASASAMXMMMMMMMSSMXMASAMAMMXMASAXAAXXMASAMAAAXSMMMAAASXMAXSAMXAAASAMXASMSXSMSMSASMMSM
SMMAAXAMSASMMSSMSMMXSXMASASASXMSMSSMSSSXAASXMSSSMSMMAAASAMAMMXSAAAAAXAAAMXSASAMSMXXSMSAXMSMSSMMASMSSSXMASMSXSASAMMMMMXMAMMXSMXAAXSAMAMAMAXMM
MAMMMSAMMAMXAXMXXMSMSXMASAMASAAXAXAXAAMMSMMAXAAAAMAXSMXMXMMMSMMSMSSMSMSSMXMXSMMXAMXXXMMSMMAASXXXAMXXAXSXMXMASMMMSASMMXMSMXAXAMSMMMAMXMASMMMM
SXMXXSAMMMMMXSMAXAAMSASAMAMAMMMMSMMMMSMAMASMMMSMMMMMXMAMXSAAXAAMXMXMAAXAMXAAMASXMMSMSAAMXMMMXXMXSMSMMMXASXSAXAMXMASAAASXSMSSSMAAAXXMXMAMAAAA
MAMSAMXMAAAAAXMMSSMXSAMASMMXMXAAXAXMXMASMAMXAXMXXAAAMSMSAXMXMMMSAMXAMXSAMMMXSAMAAXMASMMSAMSMSAMAMAAAMAMMAMMMSMMMMAMMMMSAMXMAMSXSMSASXMMXSMMS
MAMXASMSXSMMMSAXXAXAMXMXMASXSSSSMMMSAMXXMASASXMASXXXAAAMMSMSMSAXMASMXASAMSSMMXMXMMMXMAMSMSAXSAMSSSSSMXAXMAXAAAAMMASXSSMMMSXSMXMXAMMMAXSAMAXA
MSSMASAMXXMASXXMXMMAXMASMXMAMAAAASAXXMASXMSXXAMASAAASMXMXAAAAMSXSAMXSASAMXAMASXASASMMSMMXMAXMAMXAAMXMMXSXMMSSSMSSMSAMXAAMXAMXXAMMMSSMMMASAMM
SAAMAMAMMMSMMMXAAXMXXASMMSMAMMMMMMASMSAMXMXMSMMASMXMXAMSXMSMSSMMMASXMASMMMXMASAXSASMAMASXMMSSSMMMMMAMSASAMXMXXXXAMXAMMSMSMSMSMSMSMMASXMXMAMX
XMMMASAMAXAAAAMSMSMMMXAXAAXMMXXSXSXMAXXMAMAAAXMXSXMMMMMAAXAAXAAASXMMMXMASXMMXMXAMXMMSMAMAAAAXXXXAAMASMASAMSMSSXMMXXAMXXXXXMXSAXAAASMMMMASAMX
MXXSXSXSXSXSMXMAAAAAMMMMSSSSMSMSAMAMSMMSASASMSMAMASAAMXSMMMSMXXMMAMXSASMMAAMAXXMXXXAAMAXSMMSSMSXSSSXSMXMAAAAMMAMSSSMSAMASXMXMAMSSXMXSASMSSSS
SSMSASASASAMXMSMSSSMSAXMAXAAAASMAMMMMAXSXMAMMSMMSAMSMSAMMAMXMSSMSAMAXXSXSMMMSMMAXMMXXMMXMXXAAAAAMXMAMXXXASMSMSSMAAAAAASMSAMMMXMXXXMASASAXMXM
MAAMMMAMAMMMSXSMXMAMSXXXXMSMSMSSMMMAMSMSMMXMMMAMMMXAXMAXSMSSXAAXMAMXMXMXMASAMXSAMXMMSASAMXSSMMMMSAMXMASMMMXMXAAMMSMMMXAXSAMAAMASAAMAMAMAMMAS
SMMMXMAMMMXXSAMMASAMMMSSMAXAAAMXSAMXXXAMXXAMAXXMMMSMSSSMAAAMMMMMSSMSAMXASXMASAMASAAASAMAXAXXXMAAXAMMMAMAAAMSMSSMXMAXSMMASAMXSASXSXMXMMMAAMAS
AAXMASXSSMMXMAMSMSAMXMAAMAMSMSMXSXSXMMMMSSXSMSMAMXXXXAMXMMMSXSSMXMASMXSXSAMXMXSASMSMMXSAMSSMMMMSSXMAMXSSMMMAAXMASMMMSAXAXAMXAMAAMSXAMASXSMXS
XMAMXXSAMXMMSAMAMXXMAMSMMXXXXXMASMMAXSMAASMXMAAAMMMMMAMASAMMAXMAAMMMAXMMXXMXXAMASXXXMAMAMXAMXXAXMAMSXXXMAXSSSSXAXAXXMXMMMSAMXMMAMSSMSASAXMMS
MMMSMMXMSAMXSASMSSMSXMXXMXMSMMMMSASMMMMMXSMAMMSMSAAMSMXAXAXMMMMSMMASMAMMSMMXMMSMMMMMMMMMMSMMMMSSXSMMMAMXSXXAAMMMMAMSSSMSAMXXAMXAXMAMMASXXMAM
AAAAAXAASXXASXMXMXAAMXMXSAAAAAAAMXAMAAMMMSASXAAAMXXXAMMSSMMXSAMXMXMAXAMAAAMMSMAMAXSAXMXSAAAAXAAXXMASAXSAMMSMSMASAAXSAAXMMMASXMSSSSMMMMMAMMAS
MMSSXSAXXSMASMMXMMSMSASASMSMSSMSSSMSSMXAXMAMMMMSMAXMASAMAMAMSSXMMSXMSSSSMSMAAXAMSMSMSAAMXSXMMSXSAMAMXAMASASXAMAMMMMMMMMAXMXMSAAXXXXXXAAAXMAS
SAMXXSXMAXMAMAMAXXXXXAMMXAMMAAMAMXXAAMSSSMAMAAAMMSMSMMXMAMAMMASAMXAXAXMAMXMSSMXXMASXAMMSXMASAMMAAMXMMSSMMASMMMSMSXAXAAMAXMMAMMMMSSMSSMSASAAS
MAXMAXAMSMSSSSSSSMSSMXMMMSMMSSMSSSMMSMAAAMASMMMSAMAXMSSSSSSSXSAMXSMMMMMMMMAMAMSAMAMSAMXXASMMMSMSSMXXXAAMMXMAXSMASASMSSSMSAMAMMAAXAAMAMXASMSM
SASMMSMMXAAAXAAAAMAMMSMMAXXXMAXAAXMAXMMSMMXMASMMMMXMMXAMMAMMMASMXMASXXMAXMAMAMMAMSMXMXSMMMAAMMAAXXMASMMMSAMSXXMAMAMAXAMAMXSASMMSSXMMAMMXMMAM
MASAXMAAMMMXMMMSMMXSAMAMASAXSXMMSMSMSSMAMSSMAAMAMSMMSMXMMXMASMXMAXXSAMSAXSAMAMMSMMMASAMAASXMSMMMSXSAMAAASASAAMMMMMMXMMMXMASASMXMAMMMXMASMSMS
MXMMMXMMSXSMMXAXAMXMASMMMXMMMXMAXAXAAASXMSAMAMMAXAASXAXAMXXASXSMMXAMAMMMMSASMSAXAMXXMASMMSAXXXMAAXMASXMMSXMAMAAAASMMSMSAMAMXMXASXXMAXAMXXAXA
MMMXAAXXMAMXMAMSAMAMAMXAMXSAXAAXMAMMSMMXXSAMAMSXSSSMMMAMMSMASAMASMMMSMXXASXMAAMMMMASMAMAAXMSMSMMMSMAMMAMXMMSASMMMMAAMAAAMXSAMSMSXAXSXMMASMSM
SAMMSMSAMAMAMAAXMMXMASMXMASXSXSAMMAMXAXXXSAMXMAMXMAAASMAAXMAMAMAMAMAMMXMXSAMMMMAXMAXMAXMMMMAAMXSXMMAMSAMXMAXMMMSSSMMSMSXMAMAMSXMMSMXASXAXXAX
SXSAAMSMMMMXMMSMSMASAMAAMAMMMMMAMMSAMXMAMMMSMXAAAXMMMAXMASMASAMXSXMASMMSMSAMXASXSMSSSMMXAAXMSMAXAASMXSAMXMSSXSAAAAXMXXMAMMSAMMAAAAASAMMMMSAM
XAMMXXSAASMSAAAAAAMSAMSXMXMAAASAMXMASAAAMAMAXXXMMSMASXMSAMXASMSMSAMASMAAAMMMSMSAMXXAAMASMSSXXMASXMMSAMXASMMXAMMMSMMXMAMSMASASMMMMSAMXSASMASA
MMMSMAMSXXAAMMMMMMAMAMXAMXSSSMSASXMMSMSMMASMSSMMAAXAMSAXMMMMSAMASXMASMSMMMSAXXXXXSMMMMAXXAAMXMXSAAMXSMXXXAAMXMSXXXMASMXMMASAMXXAXXXMAXXSAAMM
AAAAMXMXXMAMXASMSMAMSMSASAAAMXSAMAXXXMAXMMSAAAASXMMSSMSMAAAMMMMXMMMXSMMAXXMMSSMSMAASXMXSMXMMXSSXMASAXXMSSSMSAMXXAXXMAMMAMAXAMXMSSSSMASXXMMSX
XMSXMXMAASAXXMMAXMAMAAXAMMMMMAMASAMXASMSAAMMMMMMAAAXSAMMSSMSASMXAXXAXAXMXSAAAMAAMMXMXMASMSSMAXMASXMASAAMAMAXMAMXSSMMAXXAMSSMMMAXAAXMXMMAXAXX
SMMXMAMXMSASMXMMMSMSXSMXMAXMMXSAMXMXMMAMMXMAXAASMMMSMMMAAAASASMSAMMSSSMAASMMSMSMSXMASMASXAAMMMSAMXMMSMSMAMXMXXSMAAXMMXSASMAMXMMMMMMMSSSMMSSM
MAAAXAMXAXASAAXXXAAAAXMXSXSSMASMSASASMAMXMSXSSMXAASXAAMMSSMMAMXSSSXMAMMMMSXMAAAAXAAMAMAMMSXMAAXMMXSAXMAMASMSXMAAXSMAAAXXMMAMXAAAXAMXAAXXAAAX
MMMMSSSMSMMMXSSMSXSMXMAXMMSAMXSASASASXXSAMMMAXAXSMMSMMXMAXXMMSAMXMAMXMASXXAXMSMMSMMSAXXXXAMMSMMSMAMASXMXMSMAAXXSAMMMMSSXSMSMMSMSXMSMMXXMMXMM
SXSXXMAAXXXMAXXXAMXMAMMASXSAMXMAMMMAMXMMMAAAMSMMMAMXXAXMMMXMASMASMXMXSXSMSSMMAXAMMASMSSXMASXAXAAMXSMMAMASXMMSMAMMSAXAAAASAXAAMAXXMXAXMSXSASA
AAMXMSMMMSMSMMXXMAAAAXSXXMSAMMMSMSMMMMXSSSSMXMAASAMMMMSSMMAMXSXXSAMMMMXMAAMMSAMMSMMSAMXASAMMMMSMSAMXSAMXSAMAAMXMXSAMXSMXMASMMMAMAXSAMXAASASX
MMMAXAAAAAAXASASMSMXMMAMXMSXMXMAAAMXSAMXAXXMSMMMSAMXAAAAASXXMXMMMMXAAXXMMMSAMXXXAMAMMSSMMAMASXXXMMMMXXSMSAMSXMASXMXXXAXXMMMXXMAXXMXMAMMMMAMA
XAMSSSSMXSSXMMASMASAXSASMAMAMASMSMSAAXAMSMSXSASASXMMSSSSMMAMSMMAAXMMMXXMAMMXSMSMSMMSAAAXSSSXSAXXMASXSAMXMAMXASAMMAMMMMSAMASXSSSSXAAMSMMXSAXX
SXSAAMXMAMAMXMXMMASXMSASXAXAXMSAMXMMXMMSAAAASAMXMAXAMXMAMXAXAAXMSSSSMSSSMSAMMAAAXAMMMSSMAASAMXMMXMAAMXMXSXMMAMMSMAMXAXMASASAXAAMMMMXMXMAXMMM
XMMMSSSMMSAXXXMXMXSAMMXMXXXXXMMMMXAXAXSAMXMAMMMMSAMSSSSSMSASMSMAMAAXAAXAMMAMMSMMMAMXMXAXMMMMXMASAXMSMXSAMMXXAXMAXASMMMSAMXMAMMMMMASMXSMMXMMM
XSXMAMAAASMMMASXMASAMAXMXMSMSAAAXXSMXSAAAXXXXMAAMASAAMAMAXAAAMMAMMMMMMSSMSSMAXAXSAMAXXAXXXAMXMXMMSAAAMXAXAMSXMSSSMXAXAMMSMXMAXSMSMSAASXMASMA
XSASXSMMXSXSAAXAMAXXMMMXAAAAAMSMXAMXXAXMAXMXSSMMSMMMSMAMMMSMMMSXSXMXSAAXMAAMAMSXSASXSMXMMSMSAMASXMXSMMSSMMXSAMXAAMSSXMSXAMAXMAXMAXMMMMAAXAAX
MSAMXXXMASXMMMSSMSSXAMASMSMSMMAMMXMMAMXSXSMAAAAXSAMSAMXSMAAXXXMXMAMMMMSSMSSMXXMASMMMXMASXAXAAMASMSAMAAXAAMAXMMMSMMXXAAAXASMSSSXSSSSMSSSMSMSM
AMXMXSXSSSXMAMAXAXXMSAMXAAAAXSASXMSMSXAMAAMMSMMMMAMXASAAMSSXSAAASAMMSXMAXAAMSAMXMXAXSXASXXSSSMASMMASXMMSMMMXSAAMXMASMMMXXXAAAAAMAXXAAAXAAAXA
MXMASMAMAXASXSMMXMXAXASAXMXMXMXSMAAAXXSSSMXXAAXASMMSMMASXXMASMSMMSSXMASXMMSXSMSMMXSSMMXMXXMAXMSMMSAMAAXMMMAASMSSXMAXASXMXMSMMMMMAMMMMSMSMSMS
XAMXAMAMXMMMAAXSSMSMSASAASXXAMASASMSMMMAMXASXSMXXMAAXMAMXXMMMXXMXXXXSMMMXXAXMXSMAAMAMAAMXSMMMMMAXXMSMMXXAMMXSMAMAMMSMMAASAXASXAXAXAAAXAXAAAA
ASXSMSMSMSAMXMMSAAMXMAMMMXAXSMASMXAAMAMAMXXMAMXMSSSMSMASMXSAMSAMXMXAXAAMMSSMAAMMMMSAMSMMAMXXAMXSMAMXAAASMMMMSMASAMAAMSMMAASAMSSSMMSSSMXMSMSM
MMAMXAAAASASXMMSMMMXMXMSMSMMAMMSXMSMXSMMSASMMMAXXAAAXXSXXAXAMMMMXMAMXSMSAAAXMAMXAXMXMXAMMSASXSAMMXMSMMXXAAXXXSAXAMMMXXSSXAMAMXXAMAXAAMSAAAXA
XMAMMMXMMSXMAAXXXSXMMAXAAAMAXSAMXXASMXMXMMMASMMMMXMMMMMXMXSXMSASMSSXAXMMMSSMXSXMMSMSMMXMXMAMXMMSMMAXXMSSSMMMXMSMSMSMSAMXMXSXMXSAMXMMAMSSMSMM
MSASASMSASASXMMSSMASMMSMSMMMXXMASXAMMASAMXSAMAMXXMSMSASXMASMMSASAAMMSMAAAMAMAMAMAAAAMMSSSMSMXSAAAXXXXAMAMAAMSAMXXAAAMMMAXMAMXAMAMXMMXAXAMXAX
AMASAMAMAXAMAMAXAMXMAMAXMASMMMXXXMMMSMMASAMXMAMMSSMAMAMXMXSAXMMMMMSAMSSMMSAMXSAMSMMMMXAAXAAASMSXSMMMSMMAMXMSMAMAMAMMMASAMXMXMXSAMXMAMSSMMSSM
MMMMMMAMMSMSAMMSSMMSMMXMXAMXMXXXXASAMXSMMMSMSAMAMAMMMAMAXXXMXMXSXMMMXAXAXMXMASAMXMASXMMXMMMXMAXMAAAAXXMAMXSXXAMXXAMXMXMAMXXXXMXAXAXXSAAAAAAX
XSXAASXMAAMXASAAAAASXSASASMASMMMMXMASAXSAXAMSXMSSSMXSMSMSMSMSMASAMAMMMMMXMMMXSSMSAMAAASASXSXMAMSSSMSSMSMSMSASXSXSMSXMSMSXMASXMSSSMSMMMSMMSXM
AAMSMSXMMSXSAMMSMMMSASASAASASMAAAASXMASXMMAXSAXMAXMAXAAMAAAAAMASAMXSAXAAMMASXMASXAMSMMMASAMXMAMAAMAMXAAAMAMXMXMASAAAAAAXAAAMMAAMAAMAXMMXMAXS
AXXXAXXXMAXMXMAMAMXMMMMMXAMXSXSXSASXMXMXMASASAMMAMSAMSMSMAMSMSMSXMXSMSASXSXSAMXSSXMAXAMXMXMAMMMMSMMMMSMSMXMASXMAMXSSMMAMAMASMXMSMMMSXMASXMAS
`;

const arraysOfLetters = testInput
    .split('\n')
    .filter(Boolean)
    .map((row) => row.split(''));

/// search for X, then expand in all directions of matrix to see if you can eventually come up with XMAS
/// every time you do, increment the solution
///

//   [
//     [ 'M', 'M', 'M', 'S', 'X', 'X', 'M', 'A', 'S', 'M' ],
//     [ 'M', 'S', 'A', 'M', 'X', 'M', 'S', 'M', 'S', 'A' ],
//     [ 'A', 'M', 'X', 'S', 'X', 'M', 'A', 'A', 'M', 'M' ],
//     [ 'M', 'S', 'A', 'M', 'A', 'S', 'M', 'S', 'M', 'X' ],
//     [ 'X', 'M', 'A', 'S', 'A', 'M', 'X', 'A', 'M', 'M' ],
//     [ 'X', 'X', 'A', 'M', 'M', 'X', 'X', 'A', 'M', 'A' ],
//     [ 'S', 'M', 'S', 'M', 'S', 'A', 'S', 'X', 'S', 'S' ],
//     [ 'S', 'A', 'X', 'A', 'M', 'A', 'S', 'A', 'A', 'A' ],
//     [ 'M', 'A', 'M', 'M', 'M', 'X', 'M', 'M', 'M', 'M' ],
//     [ 'M', 'X', 'M', 'X', 'A', 'X', 'M', 'A', 'S', 'X' ]
//   ]

// let row = 0;
// let char = 4;

// [0, 4] => [0,3], [1,3], [1, 4], [0,5], [1,5], [-1, 3], [-1, 4], [-1, 5]
// [r, c] => [r,c-1], [r+1,c-1], [r+1, c], [r,c+1], [r+1,c+1], [r-1, c-1], [r-1, c], [r-1, c+1]

function findXmas(input: string[][]): number {
    const t0 = performance.now()
    let solution = 0;
    
    // loop over each row of the matrix
    for (let row = 0; row < input.length; row++) {
        // loop over each letter of each row
        for (let letter = 0; letter < input[row].length; letter++) {
            // Find an 'X'? Start searching for "MAS"
            if (input[row][letter] === 'X') {
                solution += searchForMAS([row, letter], input, 'MAS');
            }
        }
    }
    
    console.log(performance.now() - t0)
    return solution;
}

function searchForMAS(
    currentLetter: [number, number],
    input: string[][],
    keyword: string,
    direction?: [number, number]
): number {
    // recursion base case
    if (!keyword.length) return 1;
    const [row, col] = currentLetter;

    let count = 0;

    const directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];

    // If a direction is already set, continue in that direction
    const toSearch = direction ? [direction] : directions;

    for (const [rowDir, colDir] of toSearch) {
        const newRow = row + rowDir;
        const newCol = col + colDir;

        // Compare current letter to first letter of updated keyword
        if (input[newRow]?.[newCol] === keyword[0]) {
            // keep going in the same direction, take away the first letter of the keyword
            count += searchForMAS([newRow, newCol], input, keyword.slice(1), [rowDir, colDir]);
        }
    }

    return count;
}

console.log(findXmas(arraysOfLetters));
