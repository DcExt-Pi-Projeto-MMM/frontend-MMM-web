import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [number, setNumber] = useState<number>();
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
            <IonTitle class="ion-text-center">login</IonTitle>
          <IonItem class="ion-text-center">
            <IonInput value={username} placeholder="digite o login" onIonChange={e => setUsername(e.detail.value!)}></IonInput>
          </IonItem>
            <IonTitle class="ion-text-center">senha</IonTitle>
          <IonItem class="ion-text-center">
            <IonInput value={password} type="password" placeholder="digite a senha" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
          
          <IonButton expand="block">FAZER LOGIN</IonButton>
        <IonHeader collapse="condense">
          <IonToolbar>
          
          </IonToolbar>
        </IonHeader>
        
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
