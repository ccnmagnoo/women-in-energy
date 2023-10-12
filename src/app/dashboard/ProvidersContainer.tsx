import { ResultProviders } from '@/Models/Providers';
import style from './ProvidersContainer.module.scss';
import React from 'react';
import { InputService } from '@/Models/Input';

export const ProvidersContainer = ({
  res,
  req,
}: {
  res?: ResultProviders;
  req: Partial<InputService>;
}) => {
  return (
    <section className={style.container}>
      <h1>proveedoras</h1>
      {res?.search.size} mujeres profesionales encontradas en
      {res?.search.location} <br />
      {req.description}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sapiente ratione
        quis dolores quidem nisi repellat! Accusantium ad laborum repellendus quod at
        numquam esse. Neque animi quia ipsa fuga architecto.
      </p>
      <p>
        Alias, vero ipsa ad doloribus ab impedit libero voluptas voluptatibus praesentium
        aspernatur in temporibus tempora laboriosam itaque! Quam, deleniti molestiae
        cumque accusantium quis itaque praesentium quia amet doloremque, pariatur commodi!
      </p>
      <p>
        Harum nam vel inventore, architecto quasi, nesciunt laborum reiciendis labore,
        doloribus autem dolorum debitis totam quis laudantium ab placeat cum odit
        similique rem velit ipsum tempore. Consequuntur neque explicabo doloribus.
      </p>
      <p>
        Ex, incidunt consequuntur, atque eligendi hic a quibusdam, qui laborum iusto non
        accusantium odit voluptate aperiam magnam maiores libero debitis. Autem ullam fuga
        libero, sunt maiores quam! Illum, officiis! Facere?
      </p>
      <p>
        Architecto vel asperiores libero temporibus, commodi rerum iure voluptas eum
        facere provident accusamus soluta odio molestias blanditiis placeat eaque?
        Assumenda necessitatibus id deleniti saepe ratione eius eaque quae doloremque
        excepturi.
      </p>
      <p>
        Doloremque ipsum blanditiis alias reiciendis soluta porro ab hic molestias
        mollitia laudantium optio repellendus unde necessitatibus, perferendis
        voluptatibus eaque quisquam cumque natus accusantium. Pariatur, aliquam esse
        perferendis suscipit eos debitis?
      </p>
      <p>
        Hic, quis repellendus! Ullam numquam quasi exercitationem, laboriosam, facere cum
        consectetur facilis porro eaque, animi libero aliquid cupiditate a tenetur? Earum
        doloremque quis tenetur nostrum beatae magni voluptatum quia fugiat?
      </p>
      <p>
        Molestiae laborum sed accusantium distinctio dignissimos neque magni minus
        officiis doloremque tempore deleniti debitis consequatur ratione repudiandae
        dolorum, nesciunt in repellendus? Qui, quos. Minima impedit accusamus dicta.
        Consequuntur, doloribus dolores.
      </p>
      <p>
        Explicabo nisi porro quae hic ipsum natus illum necessitatibus ducimus quaerat
        culpa perferendis at, ullam laudantium facilis dolores aperiam velit tempora,
        mollitia fugiat doloremque! Quia ut quidem minima ab corrupti.
      </p>
      <p>
        Minima pariatur officia placeat aliquam, dolorem deleniti veritatis rerum repellat
        quasi. Nobis sunt similique quia voluptatibus dicta, doloremque dignissimos, sequi
        earum laboriosam quam quasi delectus rem laborum deserunt fugit nulla!
      </p>
      <p>
        Animi incidunt veniam vitae eius eligendi nobis quam at, ullam, quaerat aliquid
        qui aspernatur dolorum tempora? Qui, corporis impedit quod odio eius architecto
        rem cumque voluptatum, natus nisi vitae ipsam.
      </p>
      <p>
        Ad adipisci ipsam dolorem quasi facere fugiat nesciunt suscipit accusamus nulla
        accusantium, rem explicabo debitis nostrum quaerat. Ab laborum aperiam
        perferendis! Neque, suscipit! Quos facere vel, ad nulla impedit ut.
      </p>
      <p>
        Nesciunt veritatis perspiciatis quibusdam, ratione aliquam neque numquam vel
        asperiores possimus ex? Repellat quis minus expedita sed inventore, cum eligendi
        autem quae ab alias aliquam labore, vitae incidunt accusamus esse.
      </p>
      <p>
        Omnis repellat ab similique ratione blanditiis veritatis minus nesciunt! Quos
        mollitia aspernatur tempore corporis magnam vitae corrupti reiciendis asperiores.
        Commodi eaque eveniet aspernatur ex explicabo minus! Ratione quisquam iusto
        deserunt!
      </p>
      <p>
        Iure molestias porro quos fuga! Aperiam est provident magnam minus nam velit neque
        aut praesentium odio ipsa, facere incidunt animi debitis quam perferendis. Quos
        veritatis aut quia nulla, molestiae alias.
      </p>
      <p>
        Ipsam maxime ea quae quos reiciendis enim ducimus, perferendis vero reprehenderit
        animi quisquam blanditiis quo libero ut omnis consectetur suscipit possimus eos
        iusto dignissimos laboriosam assumenda nobis. Error, vel nisi.
      </p>
      <p>
        Aspernatur, doloribus? Cum sed doloremque alias, voluptatem dolores delectus
        explicabo tempora perferendis ex aperiam animi labore! Vitae eveniet, amet eum
        repellat corrupti, dicta modi voluptate distinctio, nostrum natus in eligendi?
      </p>
      <p>
        Labore, repellat incidunt. Laboriosam harum enim voluptas doloremque incidunt sunt
        placeat dolore, commodi porro nobis aut aspernatur impedit nulla explicabo
        inventore reprehenderit quo cupiditate. Omnis non mollitia et voluptatum
        accusantium.
      </p>
      <p>
        Assumenda fuga dicta molestiae mollitia molestias alias a inventore dignissimos
        esse beatae temporibus distinctio sunt praesentium, reprehenderit saepe autem ipsa
        iusto cum voluptatibus itaque reiciendis possimus minima? Quasi, tenetur libero.
      </p>
      <p>
        Nobis impedit nam assumenda nihil consectetur nemo repudiandae, non rem.
        Perferendis odio itaque veritatis vel eius cum commodi aperiam dolores cupiditate
        quidem? Aliquid, libero fugit non harum alias velit in.
      </p>
    </section>
  );
};
