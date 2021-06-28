let prescriptions = [
  // 진료번호 , 약코드, 약이름, 구분, 단위, 처방일수 
  {treatment_id: 1, medicine_code: "NIZA15", medicine_name: "AXID Cap 150mg", medicine_kind : "내복약", medicine_type:	"T",prescriptions_comment: 3},
  {treatment_id: 1, medicine_code: "ROPIN1", medicine_name: "ONIROL Tab 1mg ", medicine_kind : "내복약", medicine_type:	"T",prescriptions_comment: 3},
  {treatment_id: 1, medicine_code: "ROXN", medicine_name: "ROXAN Cap 75mg", medicine_kind : "내복약", medicine_type:	"C",prescriptions_comment: 3},
  {treatment_id: 2, medicine_code: "RT150", medicine_name: "URANTAC Tab 150mg", medicine_kind : "내복약", medicine_type:	"T",prescriptions_comment: 3},
  {treatment_id: 2, medicine_code: "SILY14", medicine_name: "LEGALON 140 Cap", medicine_kind : "내복약", medicine_type:	"T",prescriptions_comment: 3},
  {treatment_id: 3, medicine_code: "SIMV2", medicine_name: "SIMVALORD Tab 20mg", medicine_kind : "내복약", medicine_type:	"C",prescriptions_comment: 3},
  {treatment_id: 3, medicine_code: "RFD45", medicine_name: "RIFODEX Tab 450mg", medicine_kind : "내복약", medicine_type:	"T",prescriptions_comment: 3},
  {treatment_id: 4, medicine_code: "PSEUDA", medicine_name: "SUDAFED Tab 60mg", medicine_kind : "내복약", medicine_type:	"C",prescriptions_comment: 3},
  {treatment_id: 4, medicine_code: "QU100", medicine_name: "Tab 400mg", medicine_kind : "내복약", medicine_type:	"T",prescriptions_comment: 3},
  {treatment_id: 5, medicine_code: "RAC", medicine_name: "MESTINON Tab 60mg", medicine_kind : "내복약", medicine_type:	"C",prescriptions_comment: 3},
  {treatment_id: 5, medicine_code: "NIZA15", medicine_name: "AXID Cap 150mg", medicine_kind : "내복약", medicine_type:	"T",prescriptions_comment: 3},
  {treatment_id: 5, medicine_code: "ROPIN1", medicine_name: "ONIROL Tab 1mg ", medicine_kind : "내복약", medicine_type:	"T",prescriptions_comment: 3},
  {treatment_id: 6, medicine_code: "ROXN", medicine_name: "ROXAN Cap 75mg", medicine_kind : "내복약", medicine_type:	"C",prescriptions_comment: 3},
  {treatment_id: 6, medicine_code: "SIMV2", medicine_name: "SIMVALORD Tab 20mg", medicine_kind : "내복약", medicine_type:	"C",prescriptions_comment: 3},
  {treatment_id: 7, medicine_code: "RFD45", medicine_name: "RIFODEX Tab 450mg", medicine_kind : "내복약", medicine_type:	"T",prescriptions_comment: 3},
  {treatment_id: 7, medicine_code: "PSEUDA", medicine_name: "SUDAFED Tab 60mg", medicine_kind : "내복약", medicine_type:	"C",prescriptions_comment: 3},
  {treatment_id: 8, medicine_code: "NIZA15", medicine_name: "AXID Cap 150mg", medicine_kind : "내복약", medicine_type:	"T",prescriptions_comment: 3},
  {treatment_id: 9, medicine_code: "ROPIN1", medicine_name: "ONIROL Tab 1mg ", medicine_kind : "내복약", medicine_type:	"T",prescriptions_comment: 3},
  {treatment_id: 9, medicine_code: "ROXN", medicine_name: "ROXAN Cap 75mg", medicine_kind : "내복약", medicine_type:	"C",prescriptions_comment: 3},
  {treatment_id: 10, medicine_code: "RT150", medicine_name: "URANTAC Tab 150mg", medicine_kind : "내복약", medicine_type:	"T",prescriptions_comment: 3},
  {treatment_id: 10, medicine_code: "SILY14", medicine_name: "LEGALON 140 Cap", medicine_kind : "내복약", medicine_type:	"T",prescriptions_comment: 3},
  {treatment_id: 11, medicine_code: "SIMV2", medicine_name: "SIMVALORD Tab 20mg", medicine_kind : "내복약", medicine_type:	"C",prescriptions_comment: 3},
  {treatment_id: 11, medicine_code: "RFD45", medicine_name: "RIFODEX Tab 450mg", medicine_kind : "내복약", medicine_type:	"T",prescriptions_comment: 3},
  {treatment_id: 12, medicine_code: "PSEUDA", medicine_name: "SUDAFED Tab 60mg", medicine_kind : "내복약", medicine_type:	"C",prescriptions_comment: 3},
  {treatment_id: 13, medicine_code: "QU100", medicine_name: "Tab 400mg", medicine_kind : "내복약", medicine_type:	"T",prescriptions_comment: 3},
  {treatment_id: 13, medicine_code: "RAC", medicine_name: "MESTINON Tab 60mg", medicine_kind : "내복약", medicine_type:	"C",prescriptions_comment: 3},
  {treatment_id: 14, medicine_code: "NIZA15", medicine_name: "AXID Cap 150mg", medicine_kind : "내복약", medicine_type:	"T",prescriptions_comment: 3},
  {treatment_id: 14, medicine_code: "ROPIN1", medicine_name: "ONIROL Tab 1mg ", medicine_kind : "내복약", medicine_type:	"T",prescriptions_comment: 3},
  {treatment_id: 14, medicine_code: "ROXN", medicine_name: "ROXAN Cap 75mg", medicine_kind : "내복약", medicine_type:	"C",prescriptions_comment: 3},
  {treatment_id: 15, medicine_code: "SIMV2", medicine_name: "SIMVALORD Tab 20mg", medicine_kind : "내복약", medicine_type:	"C",prescriptions_comment: 3},
  {treatment_id: 15, medicine_code: "RFD45", medicine_name: "RIFODEX Tab 450mg", medicine_kind : "내복약", medicine_type:	"T",prescriptions_comment: 3},
  {treatment_id: 16, medicine_code: "PSEUDA", medicine_name: "SUDAFED Tab 60mg", medicine_kind : "내복약", medicine_type:	"C",prescriptions_comment: 3}
]


/*
IRES	IRESSA Tab 250mg 	내복약	T
ROPIN1	ONIROL Tab 1mg 	내복약	T
ROXN	ROXAN Cap 75mg 	내복약	C
RT150	URANTAC Tab 150mg 	내복약	T
SILY14	LEGALON 140 Cap 140mg 	내복약	C
SIMV2	SIMVALORD Tab 20mg 	내복약	T
RFD45	RIFODEX Tab 450mg 	내복약	T
PSEUDA	SUDAFED Tab 60mg 	내복약	T
PXF	PERENTAL Tab 400mg 	내복약	T
PYRIDO	MESTINON Tab 60mg 	내복약	T
QU100	SEROQUEL Tab 100mg	내복약	T
RAC	ISOTINON Cap 10mg 	내복약	C
RAMI5	TRITACE Tab 5mg 	내복약	T
REPAG1	REPANORM Tab 1mg 	내복약	T
RFD15	RIFODEX Cap 150mg 	내복약	C
RISP1	RIPERIDON Tab 1mg 	내복약	T
ZADIT	ZADITEN Tab 1mg 	내복약	T
CAROLF	CAROL-F Tab  	내복약	T
CFX-P	SUPRAX Gran 50mg/g 	내복약	G
CILOST	PLETAAL Tab 50mg 	내복약	T
CLOZ2	CLOZARIL Tab 25mg 	내복약	T
JTELD4	PRITOR PLUS Tab 40mg (GSK)	내복약	T
JTELD8	PRITOR PLUS Tab 80mg (GSK)	내복약	T
JMESO	MESOCAN Cap 50mg	내복약	C
ZONI	EXCEGRAN Tab 100mg 	내복약	T
ENTACA	COMTAN Tab 200mg	내복약	T
PAS-K	PAS Granule 3.3g/pk 	내복약	PK
ONDA	ZOFRAN ZYDIS Tab 8mg (GSK)	내복약	T
JANDRO	ANDROCUR Tab 50mg	내복약	T
JIBUST	IBUSTRIN Tab 200mg -	내복약	T
JDIACE	ATRODAR Cap 50mg 	내복약	C
JGVAN5	GLUCOVANCE Tab 500/5mg (Merck)	내복약	T
JGVAN2	GLUCOVANCE Tab 500/2.5mg (Merc	내복약	T
JTAGENF	TAGEN-F Cap	내복약	C
JOLOPA	ALLELOCK Tab 5mg 	내복약	T
TRETIN	VESANOID Cap 10mg 	내복약	C
JGYNO-K	PROGYNOVA Tab 2mg 28T/PK	내복약	PK
JCONCER	CONCERTA OROS Tab 18mg 	내복약	T
AUGD-S	AUGMENTIN DUO Syr 228mg/5ml 	내복약	ML
JEPRO	TEVETEN Tab 600mg -	내복약	T
JEVOP	EVOPRIM Soft Cap 40mg 	내복약	C
JBARN5	OLDECA Cap 5mg	내복약	C
JVIT-S	PRIVITUSS LIQUID Susp 	내복약	ML
JCFDT-P	MEIACT FINE Gran 100mg/g 	내복약	G
JPRAVA2	MEVALOTIN Tab 20mg 	내복약	T
JPRAVA4	MEVALOTIN Tab 40mg 	내복약	T
JVOGL3	BASEN Tab 0.3mg (CJ)-	내복약	T
JKETAS	KETAS Cap 10mg -	내복약	C
IMID5	TANATRIL Tab 5mg 	내복약	T
IMP	IMIPRAMINE Tab 25mg 	내복약	T
INAH	YUHANZID Tab 100mg 	내복약	T
INHIB	INHIBASE Tab 2.5mg 	내복약	T
ISDN4	ISOKET RETARD Tab 40mg 	내복약	T
ISOKET	ISOKET RETARD Cap 120mg 	내복약	C
ITOP	GANATON Tab 50mg 	내복약	T
ITZOL	SPORANOX Cap 100mg 	내복약	C
*/



export default prescriptions;

/*
code}>
                            <td>{item.code}</td>
                            <td>{item.name}</td>
                            <td>{item.kind}</td>
                            <td>{item.type}</td>
                            <td>{item.comment}</td>


*/