import { S as SvelteComponentDev, b as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, w as createEventDispatcher, X as onDestroy, e as element, C as space, B as text, x as create_component, f as claim_element, g as children, h as detach_dev, E as claim_space, D as claim_text, y as claim_component, F as src_url_equal, j as attr_dev, k as add_location, l as insert_hydration_dev, G as append_hydration_dev, z as mount_component, H as set_data_dev, t as transition_in, q as transition_out, A as destroy_component } from './client.3645e18c.js';
import { B as Button, m as meetups } from './Button.8c5b95fd.js';

/* src/routes/MeetupDetail.svelte generated by Svelte v3.44.3 */
const file = "src/routes/MeetupDetail.svelte";

// (29:4) <Button href="mailto:{selectedMeetup.contactEmail}">
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Contact");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Contact");
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(29:4) <Button href=\\\"mailto:{selectedMeetup.contactEmail}\\\">",
		ctx
	});

	return block;
}

// (30:4) <Button mode="outline" on:click={() => dispatch("close")}>
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Close");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Close");
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(30:4) <Button mode=\\\"outline\\\" on:click={() => dispatch(\\\"close\\\")}>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let section;
	let div0;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let div1;
	let h1;
	let t1_value = /*selectedMeetup*/ ctx[0].title + "";
	let t1;
	let t2;
	let h2;
	let t3_value = /*selectedMeetup*/ ctx[0].subtitle + "";
	let t3;
	let t4;
	let t5_value = /*selectedMeetup*/ ctx[0].address + "";
	let t5;
	let t6;
	let p;
	let t7_value = /*selectedMeetup*/ ctx[0].description + "";
	let t7;
	let t8;
	let button0;
	let t9;
	let button1;
	let current;

	button0 = new Button({
			props: {
				href: "mailto:" + /*selectedMeetup*/ ctx[0].contactEmail,
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1 = new Button({
			props: {
				mode: "outline",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler*/ ctx[3]);

	const block = {
		c: function create() {
			section = element("section");
			div0 = element("div");
			img = element("img");
			t0 = space();
			div1 = element("div");
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			h2 = element("h2");
			t3 = text(t3_value);
			t4 = text(" - ");
			t5 = text(t5_value);
			t6 = space();
			p = element("p");
			t7 = text(t7_value);
			t8 = space();
			create_component(button0.$$.fragment);
			t9 = space();
			create_component(button1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div0 = claim_element(section_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(section_nodes);
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			h2 = claim_element(div1_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t3 = claim_text(h2_nodes, t3_value);
			t4 = claim_text(h2_nodes, " - ");
			t5 = claim_text(h2_nodes, t5_value);
			h2_nodes.forEach(detach_dev);
			t6 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			t7 = claim_text(p_nodes, t7_value);
			p_nodes.forEach(detach_dev);
			t8 = claim_space(div1_nodes);
			claim_component(button0.$$.fragment, div1_nodes);
			t9 = claim_space(div1_nodes);
			claim_component(button1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (!src_url_equal(img.src, img_src_value = /*selectedMeetup*/ ctx[0].imageUrl)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*selectedMeetup*/ ctx[0].title);
			attr_dev(img, "class", "svelte-10utsu1");
			add_location(img, file, 22, 4, 465);
			attr_dev(div0, "class", "image svelte-10utsu1");
			add_location(div0, file, 21, 2, 441);
			attr_dev(h1, "class", "svelte-10utsu1");
			add_location(h1, file, 25, 4, 567);
			attr_dev(h2, "class", "svelte-10utsu1");
			add_location(h2, file, 26, 4, 603);
			attr_dev(p, "class", "svelte-10utsu1");
			add_location(p, file, 27, 4, 669);
			attr_dev(div1, "class", "content svelte-10utsu1");
			add_location(div1, file, 24, 2, 541);
			attr_dev(section, "class", "svelte-10utsu1");
			add_location(section, file, 20, 0, 429);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, section, anchor);
			append_hydration_dev(section, div0);
			append_hydration_dev(div0, img);
			append_hydration_dev(section, t0);
			append_hydration_dev(section, div1);
			append_hydration_dev(div1, h1);
			append_hydration_dev(h1, t1);
			append_hydration_dev(div1, t2);
			append_hydration_dev(div1, h2);
			append_hydration_dev(h2, t3);
			append_hydration_dev(h2, t4);
			append_hydration_dev(h2, t5);
			append_hydration_dev(div1, t6);
			append_hydration_dev(div1, p);
			append_hydration_dev(p, t7);
			append_hydration_dev(div1, t8);
			mount_component(button0, div1, null);
			append_hydration_dev(div1, t9);
			mount_component(button1, div1, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*selectedMeetup*/ 1 && !src_url_equal(img.src, img_src_value = /*selectedMeetup*/ ctx[0].imageUrl)) {
				attr_dev(img, "src", img_src_value);
			}

			if (!current || dirty & /*selectedMeetup*/ 1 && img_alt_value !== (img_alt_value = /*selectedMeetup*/ ctx[0].title)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if ((!current || dirty & /*selectedMeetup*/ 1) && t1_value !== (t1_value = /*selectedMeetup*/ ctx[0].title + "")) set_data_dev(t1, t1_value);
			if ((!current || dirty & /*selectedMeetup*/ 1) && t3_value !== (t3_value = /*selectedMeetup*/ ctx[0].subtitle + "")) set_data_dev(t3, t3_value);
			if ((!current || dirty & /*selectedMeetup*/ 1) && t5_value !== (t5_value = /*selectedMeetup*/ ctx[0].address + "")) set_data_dev(t5, t5_value);
			if ((!current || dirty & /*selectedMeetup*/ 1) && t7_value !== (t7_value = /*selectedMeetup*/ ctx[0].description + "")) set_data_dev(t7, t7_value);
			const button0_changes = {};
			if (dirty & /*selectedMeetup*/ 1) button0_changes.href = "mailto:" + /*selectedMeetup*/ ctx[0].contactEmail;

			if (dirty & /*$$scope*/ 32) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 32) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(button0);
			destroy_component(button1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('MeetupDetail', slots, []);
	let { id } = $$props;
	let selectedMeetup;

	const unsubscribe = meetups.subscribe(items => {
		$$invalidate(0, selectedMeetup = items.find(i => i.id === id));
	});

	const dispatch = createEventDispatcher();

	onDestroy(() => {
		unsubscribe();
	});

	const writable_props = ['id'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<MeetupDetail> was created with unknown prop '${key}'`);
	});

	const click_handler = () => dispatch("close");

	$$self.$$set = $$props => {
		if ('id' in $$props) $$invalidate(2, id = $$props.id);
	};

	$$self.$capture_state = () => ({
		meetups,
		Button,
		onDestroy,
		createEventDispatcher,
		id,
		selectedMeetup,
		unsubscribe,
		dispatch
	});

	$$self.$inject_state = $$props => {
		if ('id' in $$props) $$invalidate(2, id = $$props.id);
		if ('selectedMeetup' in $$props) $$invalidate(0, selectedMeetup = $$props.selectedMeetup);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [selectedMeetup, dispatch, id, click_handler];
}

class MeetupDetail extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { id: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "MeetupDetail",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*id*/ ctx[2] === undefined && !('id' in props)) {
			console.warn("<MeetupDetail> was created without expected prop 'id'");
		}
	}

	get id() {
		throw new Error("<MeetupDetail>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set id(value) {
		throw new Error("<MeetupDetail>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default MeetupDetail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVldHVwRGV0YWlsLjUwZGY2MzA2LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL01lZXR1cERldGFpbC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IG1lZXR1cHMgZnJvbSBcIi4uL1N0b3JlL21lZXR1cHMtc3RvcmVcIjtcbiAgaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9VSS9CdXR0b24uc3ZlbHRlXCI7XG4gIGltcG9ydCB7IG9uRGVzdHJveSwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSBcInN2ZWx0ZVwiO1xuXG4gIGV4cG9ydCBsZXQgaWQ7XG5cbiAgbGV0IHNlbGVjdGVkTWVldHVwO1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gbWVldHVwcy5zdWJzY3JpYmUoKGl0ZW1zKSA9PiB7XG4gICAgc2VsZWN0ZWRNZWV0dXAgPSBpdGVtcy5maW5kKChpKSA9PiBpLmlkID09PSBpZCk7XG4gIH0pO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5cbiAgb25EZXN0cm95KCgpID0+IHtcbiAgICB1bnN1YnNjcmliZSgpO1xuICB9KTtcbjwvc2NyaXB0PlxuXG48c2VjdGlvbj5cbiAgPGRpdiBjbGFzcz1cImltYWdlXCI+XG4gICAgPGltZyBzcmM9e3NlbGVjdGVkTWVldHVwLmltYWdlVXJsfSBhbHQ9e3NlbGVjdGVkTWVldHVwLnRpdGxlfSAvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICA8aDE+e3NlbGVjdGVkTWVldHVwLnRpdGxlfTwvaDE+XG4gICAgPGgyPntzZWxlY3RlZE1lZXR1cC5zdWJ0aXRsZX0gLSB7c2VsZWN0ZWRNZWV0dXAuYWRkcmVzc308L2gyPlxuICAgIDxwPntzZWxlY3RlZE1lZXR1cC5kZXNjcmlwdGlvbn08L3A+XG4gICAgPEJ1dHRvbiBocmVmPVwibWFpbHRvOntzZWxlY3RlZE1lZXR1cC5jb250YWN0RW1haWx9XCI+Q29udGFjdDwvQnV0dG9uPlxuICAgIDxCdXR0b24gbW9kZT1cIm91dGxpbmVcIiBvbjpjbGljaz17KCkgPT4gZGlzcGF0Y2goXCJjbG9zZVwiKX0+Q2xvc2U8L0J1dHRvbj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG5cbjxzdHlsZT5cbiAgc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgfVxuXG4gIC5pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNXJlbTtcbiAgfVxuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG5cbiAgLmltYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFNsYWJcIiwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBjb2xvcjogIzZiNmI2YjtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztZQTRCd0QsU0FBTzs7O3lCQUFQLFNBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUNELE9BQUs7Ozt5QkFBTCxPQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBSjFELEdBQWMsSUFBQyxLQUFLOzs7O21DQUNwQixHQUFjLElBQUMsUUFBUTs7O21DQUFLLEdBQWMsSUFBQyxPQUFPOzs7O21DQUNuRCxHQUFjLElBQUMsV0FBVzs7Ozs7Ozs7Ozt5Q0FDUixHQUFjLElBQUMsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBRnBCLEtBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUFILEtBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O2tFQUp0QixHQUFjLElBQUMsUUFBUTsyREFBTyxHQUFjLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FGaEUsb0JBV1U7R0FWUixvQkFFTTtHQURKLG9CQUFnRTs7R0FFbEUsb0JBTU07R0FMSixvQkFBK0I7OztHQUMvQixvQkFBNkQ7Ozs7O0dBQzdELG9CQUFtQzs7Ozs7Ozs7OzhHQUx6QixHQUFjLElBQUMsUUFBUTs7Ozt5R0FBTyxHQUFjLElBQUMsS0FBSzs7OztpR0FHdkQsR0FBYyxJQUFDLEtBQUs7aUdBQ3BCLEdBQWMsSUFBQyxRQUFRO2lHQUFLLEdBQWMsSUFBQyxPQUFPO2lHQUNuRCxHQUFjLElBQUMsV0FBVzs7MkZBQ1IsR0FBYyxJQUFDLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BdkJ4QyxFQUFFO0tBRVQsY0FBYzs7T0FFWixXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBRSxLQUFLO2tCQUMxQyxjQUFjLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBRSxDQUFDLElBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFOzs7T0FHMUMsUUFBUSxHQUFHLHFCQUFxQjs7Q0FFdEMsU0FBUztFQUNQLFdBQVc7Ozs7Ozs7Ozs2QkFhNEIsUUFBUSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
