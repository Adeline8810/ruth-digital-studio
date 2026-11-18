
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  enviarCorreo(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const datos = form.value;

    const destinatario = 'adeline02025@gmail.com';

    const asunto = 'Nouveau projet - Ruth Digital Studio';

    const mensaje =
      `Nom : ${datos.Nom}\n` +
      `Email : ${datos.Email}\n` +
      `Projet : ${datos.Projet}\n\n` +
      `Message :\n${datos.Message}`;

    const url =
      `mailto:${destinatario}` +
      `?subject=${encodeURIComponent(asunto)}` +
      `&body=${encodeURIComponent(mensaje)}`;

    window.location.href = url;
  }
}
