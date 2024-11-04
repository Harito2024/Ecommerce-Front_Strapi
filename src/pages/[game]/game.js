import { BasicLayout } from "@/layouts";
import { Game } from "@/components/Game";
import { Separator } from "@/components/Shared";
import { Seo } from "@/components/Shared";
export default function GamePage(props) {
  const { game } = props;
  const games = game.data[0];

  const wallpaper = games.attributes.wallpaper;
  const urlStrapi2 = "https://ecommerce-backstrapi.up.railway.app";
  const urlStrapi = "http://localhost:1337";
  const wallpaperUrl = `${urlStrapi2}${wallpaper.data.attributes.url}`;
  const screenshots = `${urlStrapi2}${games.attributes.screenshots.data}`;

  return (
    <>
      <Seo
        title={games.attributes.title}
        description={games.attributes.summary}
      />
      <BasicLayout>
        <Game.HeaderWallpaper image={wallpaperUrl} />
        <Game.Panel gameId={games.id} game={games.attributes} />
        <Separator height={50} />

        <Game.Info game={games.attributes} />
        <Separator height={30} />

        <Game.Media video={games.attributes.video} screenshots={screenshots} />
        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
