import { useTheme } from '@react-navigation/native'
import * as React from 'react'
import { FlatList, Image, StyleSheet, View } from 'react-native'

import { Card, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Text } from '@/components/ui/text'

export default function Assignment6Screen() {
  const { colors } = useTheme()
  const [search, setSearch] = React.useState('')

  const filteredPeople = React.useMemo(() => {
    const lowerSearch = search.toLowerCase()
    return people.filter((person) =>
      person.name.toLowerCase().includes(lowerSearch)
    )
  }, [search])

  return (
    <View style={styles.container}>
      <Input
        placeholder='Search...'
        value={search}
        onChangeText={setSearch}
        style={{ marginBottom: 16 }}
      />

      <FlatList
        data={filteredPeople}
        contentContainerStyle={{ gap: 8 }}
        renderItem={({ item }) => (
          <Card>
            <CardHeader style={styles.item}>
              <Image
                source={{ uri: item.image }}
                style={[styles.itemImage, { borderColor: colors.primary }]}
              />

              <Text>{item.name}</Text>
            </CardHeader>
          </Card>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 9999,
    borderWidth: 1,
  },
})

const people = [
  {
    name: 'Tana Beebee',
    image: 'https://robohash.org/quodautemaut.png?size=50x50&set=set1',
  },
  {
    name: 'Harlan Kaspar',
    image: 'https://robohash.org/animiinnesciunt.png?size=50x50&set=set1',
  },
  {
    name: 'Kiele Polden',
    image: 'https://robohash.org/animietdolores.png?size=50x50&set=set1',
  },
  {
    name: "Thebault O'Corrane",
    image: 'https://robohash.org/ametlaborumdolores.png?size=50x50&set=set1',
  },
  {
    name: 'Cobbie Kinkead',
    image: 'https://robohash.org/quivoluptasducimus.png?size=50x50&set=set1',
  },
  {
    name: 'Maisie Hamil',
    image: 'https://robohash.org/exoditautem.png?size=50x50&set=set1',
  },
  {
    name: 'Haskell Laguerre',
    image: 'https://robohash.org/repellatreiciendissed.png?size=50x50&set=set1',
  },
  {
    name: 'Vitia Stittle',
    image: 'https://robohash.org/noncorruptilaborum.png?size=50x50&set=set1',
  },
  {
    name: 'Madlen Laurentino',
    image:
      'https://robohash.org/voluptatemquistemporibus.png?size=50x50&set=set1',
  },
  {
    name: 'Carter Tinner',
    image: 'https://robohash.org/esseutofficiis.png?size=50x50&set=set1',
  },
  {
    name: 'Lauraine Strettle',
    image: 'https://robohash.org/eaqueautaccusamus.png?size=50x50&set=set1',
  },
  {
    name: 'Torrey Battill',
    image: 'https://robohash.org/erroripsamnesciunt.png?size=50x50&set=set1',
  },
  {
    name: 'Wenona Helkin',
    image: 'https://robohash.org/voluptasexplicaboquia.png?size=50x50&set=set1',
  },
  {
    name: 'Theda Stickens',
    image: 'https://robohash.org/aquisapiente.png?size=50x50&set=set1',
  },
  {
    name: "Randolf O'Dee",
    image: 'https://robohash.org/quaevelitquod.png?size=50x50&set=set1',
  },
  {
    name: 'Pascale Musgrove',
    image: 'https://robohash.org/voluptatumetiure.png?size=50x50&set=set1',
  },
  {
    name: 'Crystal Yantsev',
    image: 'https://robohash.org/possimusquiaeum.png?size=50x50&set=set1',
  },
  {
    name: 'Casandra Akid',
    image: 'https://robohash.org/doloroditdebitis.png?size=50x50&set=set1',
  },
  {
    name: 'Dix Klaaassen',
    image: 'https://robohash.org/veldeseruntipsa.png?size=50x50&set=set1',
  },
  {
    name: 'Kerri Brandone',
    image:
      'https://robohash.org/eiusdignissimosoccaecati.png?size=50x50&set=set1',
  },
  {
    name: 'Trisha Slowgrove',
    image: 'https://robohash.org/etexplicabomodi.png?size=50x50&set=set1',
  },
  {
    name: 'Hilary Berthel',
    image: 'https://robohash.org/cumquedistinctioomnis.png?size=50x50&set=set1',
  },
  {
    name: 'Celestia MacKeeg',
    image: 'https://robohash.org/utliberosunt.png?size=50x50&set=set1',
  },
  {
    name: 'Ezri Hainge',
    image: 'https://robohash.org/ipsumexmolestias.png?size=50x50&set=set1',
  },
  {
    name: 'Evanne Duchart',
    image: 'https://robohash.org/eosquaeratsit.png?size=50x50&set=set1',
  },
  {
    name: 'Brandy Wyldbore',
    image:
      'https://robohash.org/consequunturrepellendusdeleniti.png?size=50x50&set=set1',
  },
  {
    name: 'Eilis Moxted',
    image: 'https://robohash.org/facereeossed.png?size=50x50&set=set1',
  },
  {
    name: 'Tallia Pennuzzi',
    image: 'https://robohash.org/corporisminimaquia.png?size=50x50&set=set1',
  },
  {
    name: 'Gaylene Linde',
    image: 'https://robohash.org/quiaidnon.png?size=50x50&set=set1',
  },
  {
    name: 'Kissie Helks',
    image: 'https://robohash.org/etdebitisdeserunt.png?size=50x50&set=set1',
  },
  {
    name: 'Axe Jandak',
    image:
      'https://robohash.org/teneturnecessitatibusvelit.png?size=50x50&set=set1',
  },
  {
    name: 'Kev Shuter',
    image:
      'https://robohash.org/impeditcupiditaterecusandae.png?size=50x50&set=set1',
  },
  {
    name: 'Vitoria Titmuss',
    image: 'https://robohash.org/eiuseaenim.png?size=50x50&set=set1',
  },
  {
    name: 'Sylvan Shelley',
    image: 'https://robohash.org/ipsuminciduntdolores.png?size=50x50&set=set1',
  },
  {
    name: 'Halsy Barrand',
    image:
      'https://robohash.org/perferendisoptioasperiores.png?size=50x50&set=set1',
  },
  {
    name: 'Marcelline Sayward',
    image: 'https://robohash.org/etvelsoluta.png?size=50x50&set=set1',
  },
  {
    name: 'Morie Coleiro',
    image: 'https://robohash.org/nobisestquis.png?size=50x50&set=set1',
  },
  {
    name: 'Fanni Parkin',
    image: 'https://robohash.org/repellatimpeditea.png?size=50x50&set=set1',
  },
  {
    name: 'Violette Valasek',
    image: 'https://robohash.org/possimusodioet.png?size=50x50&set=set1',
  },
  {
    name: 'Yorgo Pelosi',
    image: 'https://robohash.org/isteexexpedita.png?size=50x50&set=set1',
  },
  {
    name: 'Melodie Francklyn',
    image: 'https://robohash.org/dolorumbeataeillum.png?size=50x50&set=set1',
  },
  {
    name: 'Edmon Labbe',
    image: 'https://robohash.org/sequiestnulla.png?size=50x50&set=set1',
  },
  {
    name: 'Bengt Kerwood',
    image: 'https://robohash.org/delenitinonaspernatur.png?size=50x50&set=set1',
  },
  {
    name: 'Starla Hegarty',
    image: 'https://robohash.org/evenietautminima.png?size=50x50&set=set1',
  },
  {
    name: 'Barbaraanne McLarnon',
    image: 'https://robohash.org/omnisdelectusaut.png?size=50x50&set=set1',
  },
  {
    name: 'Powell Tippin',
    image: 'https://robohash.org/voluptatemdeseruntqui.png?size=50x50&set=set1',
  },
  {
    name: 'Yorke Gotcher',
    image:
      'https://robohash.org/veritatisdelectusnecessitatibus.png?size=50x50&set=set1',
  },
  {
    name: 'Trixy Grindall',
    image: 'https://robohash.org/temporibusquoqui.png?size=50x50&set=set1',
  },
  {
    name: 'Dew Reidie',
    image: 'https://robohash.org/adipisciquameos.png?size=50x50&set=set1',
  },
  {
    name: 'Micheline Frowde',
    image: 'https://robohash.org/estassumendaquisquam.png?size=50x50&set=set1',
  },
  {
    name: 'Edy Giraudo',
    image: 'https://robohash.org/similiqueaperiamsed.png?size=50x50&set=set1',
  },
  {
    name: 'Elijah de Clerc',
    image: 'https://robohash.org/aliquidexpeditafuga.png?size=50x50&set=set1',
  },
  {
    name: 'Kevina Deeks',
    image: 'https://robohash.org/inrepellatad.png?size=50x50&set=set1',
  },
  {
    name: 'Ranique Philp',
    image:
      'https://robohash.org/sitcupiditatedoloremque.png?size=50x50&set=set1',
  },
  {
    name: 'Astrix Trill',
    image: 'https://robohash.org/rerumearumtempore.png?size=50x50&set=set1',
  },
  {
    name: 'Junia Luxen',
    image: 'https://robohash.org/liberosintrem.png?size=50x50&set=set1',
  },
  {
    name: 'Giacobo Nuzzti',
    image: 'https://robohash.org/laudantiumcommodinon.png?size=50x50&set=set1',
  },
  {
    name: 'Dawna Alcoran',
    image:
      'https://robohash.org/voluptatemaccusantiumadipisci.png?size=50x50&set=set1',
  },
  {
    name: 'Tiffany Sapwell',
    image: 'https://robohash.org/officiisrerumnisi.png?size=50x50&set=set1',
  },
  {
    name: 'Obed Biers',
    image: 'https://robohash.org/utpraesentiumneque.png?size=50x50&set=set1',
  },
  {
    name: 'Bobbe Hatton',
    image:
      'https://robohash.org/recusandaeducimuseveniet.png?size=50x50&set=set1',
  },
  {
    name: 'Elisabet Arbor',
    image: 'https://robohash.org/voluptatemasuscipit.png?size=50x50&set=set1',
  },
  {
    name: 'Saraann Cosh',
    image: 'https://robohash.org/minusestaccusamus.png?size=50x50&set=set1',
  },
  {
    name: 'Justis Lettson',
    image: 'https://robohash.org/inporroiure.png?size=50x50&set=set1',
  },
  {
    name: 'Kerrie Thow',
    image: 'https://robohash.org/blanditiisomnisillum.png?size=50x50&set=set1',
  },
  {
    name: 'Dinny Biggans',
    image:
      'https://robohash.org/quibusdamquidemadipisci.png?size=50x50&set=set1',
  },
  {
    name: 'Boris Collisson',
    image:
      'https://robohash.org/enimpossimusrepellendus.png?size=50x50&set=set1',
  },
  {
    name: 'Aaron Thies',
    image: 'https://robohash.org/eumexdolorum.png?size=50x50&set=set1',
  },
  {
    name: 'Cesare Rochford',
    image: 'https://robohash.org/deseruntistequi.png?size=50x50&set=set1',
  },
  {
    name: 'Carolann Lyfe',
    image: 'https://robohash.org/ducimuseumalias.png?size=50x50&set=set1',
  },
  {
    name: 'Valentin Canacott',
    image: 'https://robohash.org/enimsedconsequatur.png?size=50x50&set=set1',
  },
  {
    name: 'Harper Shearsby',
    image: 'https://robohash.org/suntestnam.png?size=50x50&set=set1',
  },
  {
    name: 'Ralf Dicke',
    image:
      'https://robohash.org/laboriosamdoloresplaceat.png?size=50x50&set=set1',
  },
  {
    name: 'Anstice Larvent',
    image: 'https://robohash.org/estnequemolestiae.png?size=50x50&set=set1',
  },
  {
    name: 'Barbabas Cockell',
    image: 'https://robohash.org/ipsumipsamdeserunt.png?size=50x50&set=set1',
  },
  {
    name: 'Jobye MacKee',
    image:
      'https://robohash.org/minimadoloribusvoluptate.png?size=50x50&set=set1',
  },
  {
    name: 'Tess McGillicuddy',
    image:
      'https://robohash.org/necessitatibustemporaincidunt.png?size=50x50&set=set1',
  },
  {
    name: 'Darla Linggood',
    image: 'https://robohash.org/voluptasetdebitis.png?size=50x50&set=set1',
  },
  {
    name: 'Thalia Malpass',
    image: 'https://robohash.org/voluptatemcommodihic.png?size=50x50&set=set1',
  },
  {
    name: 'Ainslie Ethridge',
    image: 'https://robohash.org/beataeipsumdeserunt.png?size=50x50&set=set1',
  },
  {
    name: 'Rowe Bradwell',
    image: 'https://robohash.org/expeditasintquam.png?size=50x50&set=set1',
  },
  {
    name: 'Yanaton Radcliffe',
    image:
      'https://robohash.org/sintaliquidnecessitatibus.png?size=50x50&set=set1',
  },
  {
    name: 'Joella Dimmock',
    image: 'https://robohash.org/estvoluptatumquaerat.png?size=50x50&set=set1',
  },
  {
    name: 'Tobias Ashleigh',
    image:
      'https://robohash.org/natusperspiciatisofficia.png?size=50x50&set=set1',
  },
  {
    name: 'Roland Penvarden',
    image: 'https://robohash.org/numquamsedaut.png?size=50x50&set=set1',
  },
  {
    name: 'Prue Berresford',
    image: 'https://robohash.org/etaliquamnostrum.png?size=50x50&set=set1',
  },
  {
    name: 'Amata Dent',
    image: 'https://robohash.org/ettemporasint.png?size=50x50&set=set1',
  },
  {
    name: 'Emlynn MacMaykin',
    image: 'https://robohash.org/sapienteeaperferendis.png?size=50x50&set=set1',
  },
  {
    name: 'Lindy Balbeck',
    image: 'https://robohash.org/etquiadoloremque.png?size=50x50&set=set1',
  },
  {
    name: 'Rica Perrone',
    image: 'https://robohash.org/totamnisivoluptatem.png?size=50x50&set=set1',
  },
  {
    name: 'Sanson Snelson',
    image: 'https://robohash.org/autsuntet.png?size=50x50&set=set1',
  },
  {
    name: 'Bern Imore',
    image: 'https://robohash.org/eiusdolormolestiae.png?size=50x50&set=set1',
  },
  {
    name: 'Wendy Bedlington',
    image: 'https://robohash.org/nonexercitationemeum.png?size=50x50&set=set1',
  },
  {
    name: 'Stanislaw Krol',
    image:
      'https://robohash.org/velblanditiisvoluptatem.png?size=50x50&set=set1',
  },
  {
    name: 'Roxane Cattlow',
    image: 'https://robohash.org/ipsaetdelectus.png?size=50x50&set=set1',
  },
  {
    name: 'Sebastian McOrkil',
    image: 'https://robohash.org/perferendisoditenim.png?size=50x50&set=set1',
  },
  {
    name: 'Fulton Broddle',
    image: 'https://robohash.org/corruptivoluptasipsa.png?size=50x50&set=set1',
  },
  {
    name: 'Kizzee Keenlyside',
    image: 'https://robohash.org/repellatetin.png?size=50x50&set=set1',
  },
  {
    name: 'Kerri Hubbard',
    image:
      'https://robohash.org/molestiaeipsamolestias.png?size=50x50&set=set1',
  },
  {
    name: 'Cleveland Schollick',
    image: 'https://robohash.org/ducimusutfugiat.png?size=50x50&set=set1',
  },
]
